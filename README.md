# Emoji Searcher
React app that recommends similar emojis based on an emoji, text or a combination of text and emojis.

#### App is currently deployed at https://sentimental-emoticons.netlify.app/
The dataset, created for the application can be accessed through [Dejavu](https://dejavu.appbase.io/?appname=emoji-dataset&url=https://f1da7b624918:3331c67d-3477-4b24-aa89-aefc6ca4683e@appbase-demo-ansible-abxiydt-arc.searchbase.io&mode=edit)

## Motivation
### 🎉 It's 2022! How many of us are able to express their emotions through texts in online conversations? 

🤨🤨🤨

### Or atleast try to make their chitchat fun and engaging?

🙁🙁🙁

It's time to be deprived of old ways and adopt these little doses of joy in the form of **emoticons**! 🔥✨🥳

This application is made with an attempt to encourage people to use emojis to spice up their daily conversations. Just paste the text here before sending to someone and get recommended with all the relatable emojis that would go nice with your text.
They will increase the precision and nuance of your often super-brief and open-to-misunderstanding communications. 
After all, sometimes a picture is worth a thousand words 😉!

## Tech Stack
- **React**, to build Emoji Searcher UI
- Hosted an **ElasticSearch** cluster where the emoji dataset(from Emojibase) has been indexed
- The emoji recommendation system is built in JS and hosted using **ReactiveScripts**
- The recommendation system uses a lightweight, heuristics-driven NLP library that performs surprisingly well (compendium-js) but can also be replaced with a ANN / DNN based model to do the same.

## Getting Started
- Clone the repo
```ssh
git clone git@github.com:the-supernova/Emoji-Search.git
```
- Install npm packages
```ssh
npm i
```
- Start the development server
```ssh
npm start
```

## Contributing
Feel free to raise a PR in case of any discrepancies or new feature suggestions!
