[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# PODTOOLZ

What tools do you need to start a podcast?  It all starts with a great idea!

- Live App: [Podtoolz](https://rickdean.github.io/podtoolz-front-end/)
- Live API: [Podtoolz API](https://dry-headland-22887.herokuapp.com/)
- App repo on Github: [rickdean/podtoolz-front-end](https://github.com/rickdean/podtoolz-front-end)
- API repo on Github: [rickdean/podtoolz-api](https://github.com/rickdean/podtoolz-api)

![Screenshot of Podtoolz](https://s3.amazonaws.com/podtools/podtoolz_grab.jpeg)

## About Podtoolz
Podtoolz allows users interested in podcasting to see the software and equipment I use on a day to day basis (along with some recommendations).  A common question I received is "what do I need to get started" and Podtoolz is the answer. Users can create a 'wishlist' of the items they want and share them with friends and family - or go on a shopping spree!

Podtoolz was built using the [Boostrap](http://getbootstrap.com/) framework with a lot of help from [Handelbars](http://handlebarsjs.com/).  The app employs a Rails API to manage user authentication and the 'wishlist' data. All site images are presented via the [Amazon S3 Web Service](https://aws.amazon.com/s3/).


## Project Planning
- [ERD](https://s3.amazonaws.com/podtools/podtoolz_erd.png) (full back end information can be found at the [Githib API repo)](https://github.com/rickdean/podtoolz-api)
- [Front End Wireframe ('above the fold')](https://s3.amazonaws.com/podtools/front_page_upper.png)
- [Front End Wireframe ('below the fold')](https://s3.amazonaws.com/podtools/front_page_lower.png)
- [Item Descriptions Wireframe (Modal)](https://s3.amazonaws.com/podtools/item_modal.png
)

## User Stories
- As a user I want to be able to view software recommendations.
- As a user I want to be able to view equipment recommendations.
- As a user I want to be able to view peripheral recommendations.
- As a user I want to be able to add an item to a wish list.
- As a user I want to be able to share my wish list (i.e. evernote or email)
- As a user I want to be able to add comments to the items on my list.
- As a user I want to be able to I want to keep my list private.
- As a user I want to be able to delete items from my wishlist.
- As an admin I want to be able to add a feature where a user can sample a show.

## Project Development Notes

Before tackling the front end I set my initial focus on creating the Rails DB and associated tables.  As the ultimate goal of the app is to allow the user to create and share a wishlist the data required for the db was an early decision. Another early decision was to host all image files using the Amazon S3 Web Service.  This allowed me to take advantage of its cloud technology, seamless delivery, and https protocol.

The front end was built using Boostrap and Boostrap modals.  The wishlist is created by allowing the user to 'add' an item to their list and Handlebars was used to present the list (allowing for deletes and the addition of comments to a list item).

Another added feature provides the user with the ability to sample one of the audio dramas I produce ([*The Behemoth*](http://modernaudiodrama.com/the-behemoth.html)) which was a finalist in the 2016 Audioverse Awards.

### Other Technologies/Software Used
- [Pixelmator](http://www.pixelmator.com/mac/) - for image manipulation/editing
- [Libsyn](https://www.libsyn.com/) - for the delivery of audio for *The Behemoth*

## Next Steps
- Allow users to send a list via email or share via social media (without copying and pasting from the front end or a web-clipping service like Evernote)


## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
