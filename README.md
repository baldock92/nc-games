# George's Board Games Review App

This app was put together during the frontend project phase during my times at Northcoders Bootcamp.

## Links

The hosted version of this app is: https://baldock92-board-games.netlify.app/

The Github repo for the backend of this app is: https://github.com/baldock92/backend-project--nc-games

The hosted version of the backend for this app is : https://my-ncgame.herokuapp.com/api

## Summary

This app displays reviews for various board games, a list of which can be seen by following the "Reviews" tab at the top of the page.
These reviews can be sorted by date, comment count or number of votes, and toggles between ascending and descending order.
You can also view reviews for each game category.
Each individual game review can be accessed by clicking on the relevant board game card, which will give more information to the user about that review. Each review can be up or down voted once only.
A comment can also be left on each review, and there is the option to delete your own comment if you wish.
Various error handling has been added, including for reviews which don't exist, or if you try to post a comment without the required fields.

## Node requirements

To run this app locally, you must ensure your node version is 17.7.1 or higher.

## How to run this app locally

To deploy this app locally (using Ubuntu), you should  take the following steps:

1. Clone repo in terminal:
```js
git clone https://github.com/baldock92/nc-games
```
2. Change into the directory:
```js
cd nc-games
```
3. Install dependencies:
```js
npm i
```
4. Deploy app with localhost:
```js
npm start
```