---
title: How to setup a Jupyter Notebook server on Ubuntu for remote work
date: '2019-01-27'
spoiler: Harness your server's GPU from other machines on your network.
---

In this tutorial we'll learn how to install and configure a remote Jupyter Notebook server on Ubuntu. A typical use case for this is having a desktop computer with a powerful GPU that you want to expose to other machines, like a laptop or a Mac, when working with Jupyter Notebooks.

## Install Jupyter Notebook

The recommended way to install Jupyter Notebook is via [Anaconda](https://www.anaconda.com/downloads)--if you already have it installed, then you also have Jupyter installed. See the [official instructions](https://jupyter.org/install) for help.

## Configure Jupyter Notebook to allow remote connections

By default, a Jupyter Notebook server runs locally at 127.0.0.1:8888 and is accessible only from localhost on [http://127.0.0.1:8888](http://127.0.0.1:8888). We're going to change that to allow connection from the _local network_. You may also configuter Notebook to accept connections from ther internet but there are security implications in doing this, which we're not going to cover in this tutorial.

### Set up a Jupyter Notebook password

You will have to enter this password whenever you access your Notebooks from a browser. In your terminal, type:

```shell
jupyter notebook password
```

You will see the following output:

```shell
Enter password:  ****
Verify password: ****
[NotebookPasswordApp] Wrote hashed password to /Users/you/.jupyter/jupyter_notebook_config.json
```

### Enable SSL

You have to use SSL to share your Jupyter Notebooks over the network. Since we're only sharing Notebooks over the _local_ network you may use a self-signed certificate with a very long expiry date.

In your terminal, type:

```shell
cd ~/.jupyter
openssl req -x509 -nodes -days 9999 -newkey rsa:2048 -keyout mykey.key -out mycert.pem
```

### Create a config file

```shell
jupyter notebook --generate-config
```

### Edit the config file

The Jupyter Notebook config file `jupyter_notebook_config.py` is in the `~/.jupyter` directory. Open the file and change the following settings:

```bash:title=jupyter_notebook_config.py
# Replace 'your_username' with your actual username
c.NotebookApp.certfile = u'/home/your_username/.jupyter/mycert.pem'
c.NotebookApp.keyfile = u'/home/your_username/.jupyter/mykey.key'

# Configure your Ubuntu machine to use a static network ip, then set it here.
# This will only expose Jupyter Notebooks to your local network.
c.NotebookApp.ip = '192.168.0.100' # set your IP here

# Do not open browser when Jupyter Notebooks start
c.NotebookApp.open_browser = False
```

## Start Jupyter Notebooks on boot

The last step is to ensure Jupyter Notebooks runs every time you boot Ubuntu.

Edit your `/etc/rc.local` file (create it, if it doesn't exist):

```bash:title=/etc/rc.local
# Replace the two 'your_username' references with your actual username
su your_username -c "jupyter notebook --config=/home/your_username/.jupyter/jupyter_notebook_config.py --no-browser --notebook-dir=/home/simon/notebooks" &
```

## Conclusion

Congratulations! You can now use Jupyter Notebooks remotely and take advantage of your GPU.

Remember to use `https` when connecting to your Jupyter Notebook server (i.e. `https://192.168.0.100`) and ignore your browser's security warnings.
