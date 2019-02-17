---
title: How to setup a Jupyter Notebook server on Ubuntu for remote work
date: '2019-01-27'
spoiler: Harness your server's GPU from other machines on your network.
---

In this tutorial we'll learn how to install and configure a remote Jupyter Notebook server on Ubuntu. A typical use case for this is having a desktop computer with a powerful GPU that you want to expose to other machines, like a laptop or a Mac, when working with Jupyter Notebooks.

## Install Jupyter Notebook

The recommended way to install Jupyter Notebook is via [Anaconda](https://www.anaconda.com/downloads)--if you already have it installed, then you also have Jupyter installed. See the [official instructions](https://jupyter.org/install) for help.

## Configure Jupyter Notebook to allow remote connections

By default, a Jupyter Notebook server runs locally at 127.0.0.1:8888 and is accessible only from localhost on [http://127.0.0.1:8888](http://127.0.0.1:8888). We're going to change that to allow remote connections. As a security precaution, I recommend blocking incoming internet connection to the `8888` port on your router.

### Create a config file

In terminal, type:

```shell
jupyter notebook --generate-config
```

### Set up a Jupyter Notebook password

You will have to enter this password whenever you access your Notebooks from a browser. In terminal, type:

```shell
jupyter notebook password
```

You will see the following output:

```shell
Enter password:  ****
Verify password: ****
[NotebookPasswordApp] Wrote hashed password to /home/your_username/.jupyter/jupyter_notebook_config.json
```

### Enable SSL

It's a good idea to enable SSL when sharing your Jupyter Notebooks over the network. You'll need a certificate for that. The easiest way is to create a self-signed certificate--the downside is that you'll have to ignore your browser's security warnings.

In terminal, type:

```shell
cd ~/.jupyter
openssl req -x509 -nodes -days 9999 -newkey rsa:2048 -keyout mykey.key -out mycert.pem
```

### Edit the config file

The Jupyter Notebook config file `jupyter_notebook_config.py` is in the `~/.jupyter` directory. Open the file and change the following settings:

```bash:title=jupyter_notebook_config.py
# Replace 'your_username' with your actual username
c.NotebookApp.certfile = u'/home/your_username/.jupyter/mycert.pem'
c.NotebookApp.keyfile = u'/home/your_username/.jupyter/mykey.key'

# Allow remote connections
c.NotebookApp.ip = '*'

# Save Notebooks under your home folder.
# Replace 'your_username' with your actual username
c.NotebookApp.notebook_dir = '/home/your_username/notebooks/'

# Do not open browser when Jupyter Notebooks start
c.NotebookApp.open_browser = False
```

## Start Jupyter Notebooks on boot

The last step is to ensure Jupyter Notebooks runs every time you boot Ubuntu. There are various ways you can achieve that. The easiest I've found is to add a cron job. In terminal, type `crontab -e` to edit your cron jobs and add the following to the end of the file:

```bash
# Replace 'your_username' with your actual username
@reboot cd ; source /.bashrc; ~/anaconda3/bin/jupyter notebook --config=/home/your_username/.jupyter/jupyter_notebook_config.py >>~/cronrun.log 2>&1
```

## Conclusion

Congratulations! You can now use Jupyter Notebooks remotely and take advantage of your GPU. Remember to use `https` when connecting to your Jupyter Notebook server (i.e. `https://192.168.0.100:8888`).
