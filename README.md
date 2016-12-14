# RedditReader
Safari extension that adds shortcut keys to collapse/expand reddit comment threads.

This is a work in progress.

Press `J` to collapse threads, top to bottom, and press `K` to expand them from the bottom up. See a demonstration [here](https://streamable.com/ua1v).

# Installation
1. Enable Safari's Develop menu <br>![Safari's Develop mode](http://i.imgur.com/Wjqcl5z.png)
2. Download/clone the repository and copy `Reddit Reader.safariextension` into your desired directory
3. From the Develop menu, select "Show Extension Builder" <br>![Show Extension Builder](http://i.imgur.com/7a4OIIX.png)
4. In Extension Builder, click "+" to add `Reddit Reader.safariextension`
5. Once it has been loaded, click "Install" to enable the extension

Unless the package is built in Extension Builder (requires a Safari Extensions Certificate), this extension will only be available until you quit Safari. To re-enable it, repeat steps 3 through 5.

# Known Issues
- [ ] Shortcut keys maintain their effect even when typing `J` or `K` into a text field
- [ ] Pressing `K` when all comments have been expanded or `J` when all comments have been collapsed will cause the extension to fail until the page is reloaded
