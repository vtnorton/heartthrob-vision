# heartthrob-vision: overview
With a simple configuration you can make your website more accessible by adding description to your images automatically via Azure Cognitive Services.

After loading your page, the heartthrob-vision will send the url of every photo on your page to the Microsoft Azure Cognitive Services to create a description of what is showing on the image.

Because it is an async function, it will take a little bit before every image to have a caption. See the examples bellow.

NOTE: We recommend to create manually all alt text for every image on your website. It will improve way more the accessibility of your website than using heartthrob-vision.

Look at examples at [the documentation](http://heartthrob.vtnorton.com/vision.html).

### what is heartthrob?

The heartthrob framework can add more elegancy to your project, to looks like the Microsoft Fluent Design design, it was also inspired by [Michael West](https://www.michaelwe.st/fluent-kit/) - an incredible designer who will dominate the world with his ideas. To see more about this, go to: [documentation](http://heartthrob.vtnorton.com/).

## status

[![Build Status](https://dev.azure.com/vtnorton/Heartthrob/_apis/build/status/heartthrob-vision?branchName=master)](https://dev.azure.com/vtnorton/Heartthrob/_build/latest?definitionId=9&branchName=master)

[![npm version](https://badge.fury.io/js/heartthrob-vision.svg)](https://badge.fury.io/js/heartthrob-vision)


## download and installation

Full download and installaton scenarios here: [documentation](http://heartthrob.vtnorton.com/vision.html)

# contribute: let's build it together
Me and my team are using it in the solutions we build every single day, so expect nice fixes and small additions as it will be more and more compatible with Kendo and other browsers.

I'm completly open to have contributions to this project, so go to the [GitHub page](https://github.com/vtnorton/Heartthrob) to help me make it even better!

If you want to contribute to the documentantation go to [heartthrob-docs github repository](https://github.com/vtnorton/Heartthrob-docs)

## here is a quicky guide in how to contribute to the framework:

1. Clone this project.
```
git clone https://github.com/vtnorton/heartthrob-vision.git
```
2. Use `npm install` to install all dependencies
3. Use the text editor you want to make any changes inside `/src`
4. Once is finished and you want to build what you created, just run the command: `gulp build`, and a directory `/build` will apper, use this directory to implement across your system.

## don't code? Still want to contribute!?
Here is a few things you can do - almost in every open source project - that would help it be even better:

* Find something cool on the internet that you want to be added here? Tell me!
* Found a bug, please report! Will fix it ASAP - this is actually the code my team uses every single day.
* This documentation can be improved somehow? Just say it to me and will do my best!
* Is something missing? In the documentation? Repository? Or in your life? You will be heard!
* Follow me on Twitter (@vt_norton) and in my blog to have info about updates!

## project roadmap
I'm sharing with some some of my plans to move foward with heartthrob as I'm focused on:

* Availability: This is a great tool that can be more efficient by being available for more developers to use it, for more regions and even costumers.
* Safety: I also want to improve how we handle the subscription key to be not available in the front end.

Constributors of all kinds from the community are welcome, but especially those that support the efforts above.

# license
Copyright (c) vtnorton. All rights reserved.

Licensed under the MIT License.
