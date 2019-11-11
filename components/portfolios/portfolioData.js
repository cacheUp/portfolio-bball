const tag = {
  redis:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360794/portfolio-tags/redis.png",
  socket_io:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360794/portfolio-tags/socket.png",
  semantic_ui:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360794/portfolio-tags/semantic.png",
  stripe:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573370352/portfolio-tags/newStripe.jpg",
  sendgrid:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573370352/portfolio-tags/newSendGrid.png",
  sass:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360794/portfolio-tags/sass.jpg",
  react:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360794/portfolio-tags/react.png",
  redux:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360793/portfolio-tags/redux.png",
  postgresql:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360793/portfolio-tags/postgres.png",
  nodejs:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360793/portfolio-tags/nodejs.png",
  material_ui:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360793/portfolio-tags/material.png",
  nextjs:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573370352/portfolio-tags/newNext.png",
  mongoose:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360793/portfolio-tags/mongoose.jpg",
  mongoDB:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360793/portfolio-tags/mongo.png",
  mapbox:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360793/portfolio-tags/mapbox.png",
  jQuery:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360793/portfolio-tags/jquery.png",
  graphql:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360792/portfolio-tags/graphql.png",
  google:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360792/portfolio-tags/google.png",
  jest:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360792/portfolio-tags/jest.png",
  aws:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360792/portfolio-tags/aws.png",
  firebase:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573370352/portfolio-tags/newFirebase.jpg",
  canvas:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573370352/portfolio-tags/newCanvas.jpg",
  auth0:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573360792/portfolio-tags/auth0.png",
  enzyme:
    "https://res.cloudinary.com/cloud-9/image/upload/v1573370352/portfolio-tags/newEnzyme.png"
};

const designhubTags = Object.entries(tag)
  .filter(
    item =>
      item[0] === "sass" ||
      item[0] === "react" ||
      item[0] === "redux" ||
      item[0] === "jest" ||
      item[0] === "enzyme" ||
      item[0] === "postgresql" ||
      item[0] === "nodejs" ||
      item[0] === "aws" ||
      item[0] === "sendgrid" ||
      item[0] === "auth0" ||
      item[0] === "express"
  )
  .map(item => {
    return { name: item[0], link: item[1] };
  });

const mapTags = Object.entries(tag)
  .filter(
    item =>
      item[0] === "graphql" ||
      item[0] === "mongoose" ||
      item[0] === "react" ||
      item[0] === "google" ||
      item[0] === "mapbox" ||
      item[0] === "material_ui" ||
      item[0] === "nodejs" ||
      item[0] === "mongoDB"
  )
  .map(item => {
    return { name: item[0], link: item[1] };
  });

const chatTags = Object.entries(tag)
  .filter(
    item =>
      item[0] === "firebase" ||
      item[0] === "react" ||
      item[0] === "redux" ||
      item[0] === "semantic_ui"
  )
  .map(item => {
    return { name: item[0], link: item[1] };
  });

const orbTags = Object.entries(tag)
  .filter(
    item =>
      item[0] === "socket_io" ||
      item[0] === "canvas" ||
      item[0] === "jQuery" ||
      item[0] === "nodejs" ||
      item[0] === "express"
  )
  .map(item => {
    return { name: item[0], link: item[1] };
  });

const shopTags = Object.entries(tag)
  .filter(
    item =>
      item[0] === "nextjs" ||
      item[0] === "react" ||
      item[0] === "semantic_ui" ||
      item[0] === "stripe" ||
      item[0] === "mongoose" ||
      item[0] === "mongoDB"
  )
  .map(item => {
    return { name: item[0], link: item[1] };
  });

const socketTags = Object.entries(tag)
  .filter(
    item =>
      item[0] === "socket_io" ||
      item[0] === "nodejs" ||
      item[0] === "react" ||
      item[0] === "canvas" ||
      item[0] === "express" ||
      item[0] === "redis" ||
      item[0] === "mongoDB" ||
      item[0] === "mongoose"
  )
  .map(item => {
    return { name: item[0], link: item[1] };
  });

export const portfolioData = [
  {
    description:
      "Designhub is a platform for designers made by developers who are designers themselves. The overall goal was to create a platform that simplifies your portfolio and allows you to share with other designers. Some of the features include, a heat map to track your activity, a sleek design to showcase your photos, and a way to pinpoint comments on specific coordinates on a photo. My role in this team was to help build the api with nodejs, express, knex, and postgresql. After I finished the backend, I hopped over to help build the client side with react, redux, and sass. This project was an overall success and is currently being used by both students and professionals.",
    video: "https://www.youtube.com/watch?v=PTBgNKuqSsY",
    name: "Designhubx",
    imgUrl:
      "https://res.cloudinary.com/cloud-9/image/upload/v1573395317/portfolio-tags/zDesignhub.svg",
    tags: designhubTags,
    github: [
      "https://github.com/Lambda-School-Labs/designhub-fe",
      "https://github.com/Lambda-School-Labs/designhub-be"
    ],
    deployUrl: "https://designhubx.com"
  },
  {
    description:
      "Geopins is a social media platform that allows you to post a pin in a location, to share photos and content about the places you travel to. This was an app I created by myself to share my travel experiences with friends and family. This app uses takes advantage of the new api context’s useReducer pattern to manage state. The backend is a fully scaled GraphQL server, that uses web sockets with the Apollo server for real time data.",
    video: null,
    name: "Geopins",
    imgUrl:
      "https://res.cloudinary.com/cloud-9/image/upload/v1573396669/portfolio-tags/globe.png",
    tags: mapTags,
    github: ["https://github.com/cacheUp/map-app"],
    deployUrl: "https://geopinz.cacheup.now.sh/login"
  },
  {
    description:
      "Shop23 is an ecommerce application. This app takes full advantage of new Next.js 9 features. The code is very clean and it makes it more reusable for clients looking for an ecommerce application. I used the Stripe Api for card transactions, MongoDB/Mongoose for database, and Semantic UI for styling.",
    video: null,
    name: "Shop23",
    imgUrl:
      "https://res.cloudinary.com/cloud-9/image/upload/v1573396820/portfolio-tags/zzshop.png",
    tags: shopTags,
    github: ["https://github.com/cacheUp/shop"],
    deployUrl: "https://shop23.herokuapp.com/"
  },
  {
    description:
      "Cpu Tracker is a real time application that allows you to track your cpu load and memory usage. It uses an open TCP connection with Socket.io to ping and pong information about the computer. It uses Redis and clustering for optimization and can handle exponential amounts of traffic. On the frontend I used React for the UI, and canvas to display real time cpu load. I learned a lot of powerful tools on my journey building this application, which is a reason why it’s one of my favorites.",
    video: null,
    name: "Cpu Tracker",
    imgUrl:
      "https://res.cloudinary.com/cloud-9/image/upload/v1573397009/portfolio-tags/zcpu.jpg",
    tags: socketTags,
    github: ["https://github.com/cacheUp/cpu-tracker"],
    deployUrl: null
  },
  {
    description:
      "Letschat is a real time chatting application that allows you to add channels and private message people. For this application, I took advantage of the build in web sockets and serverless functionality of firebase. I used redux for state management and Semantic-UI for the user interface. I enjoyed using firebase because it gives you tools to build a full scale application in very little time, and also made it very simple to use web sockets.",
    video: null,
    name: "Lets Chat",
    imgUrl:
      "https://res.cloudinary.com/cloud-9/image/upload/v1573397588/portfolio-tags/zchat.jpg",
    tags: chatTags,
    github: ["https://github.com/cacheUp/letschat"],
    deployUrl: "https://letschat-ddb58.firebaseapp.com/"
  },
  {
    description:
      "Orb-Eater is a real time multiplayer game that allows you to swallow orbs to grow bigger and other players who are smaller than you. I decided to build this application to sharpen my skills with Socket.io. This was a great learning experience, I learned how to use vectors for player collisions. It was a lot more math than I expect, but with a little research and stack overflow I was able to overcome the hurdles that came with building this application.",
    video: null,
    name: "Orb Eater",
    imgUrl:
      "https://res.cloudinary.com/cloud-9/image/upload/v1573397979/portfolio-tags/zorb.jpg",
    tags: orbTags,
    github: ["https://github.com/cacheUp/orb-eater"],
    deployUrl: "https://orb-eater.herokuapp.com/"
  }
];
