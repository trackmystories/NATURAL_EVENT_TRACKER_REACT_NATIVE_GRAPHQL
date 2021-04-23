const firebase = require('./api/config');

module.exports = {
  Query: {
    events: (_, __, {dataSources}) => dataSources.eventsAPI.getAllEvents(),

    volcanoes: (_, __, {dataSources}) =>
      dataSources.categoriesAPI.getAllVolcanoes(),

    wildfires: (_, __, {dataSources}) =>
      dataSources.categoriesAPI.getAllWildFires(),

    seaLakeIce: (_, __, {dataSources}) =>
      dataSources.categoriesAPI.getAllSeaLakeIce(),

    severeStorms: (_, __, {dataSources}) =>
      dataSources.categoriesAPI.getAllSevereStorms(),
  },

  Mutation: {
    signupWithEmail: async (_, {email, password}) => {
      const user = firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          return userCredentials.user.updateProfile({displayName: name});
        });
      return {user};
    },

    loginWithEmail: async (_, {email, password}) => {
      const user = firebase.auth().signInWithEmailAndPassword(email, password);
      return {user};
    },

    handleForgotPassword: async (_, {email}) => {
      const user = firebase.auth().sendPasswordResetEmail(email);
      return {user};
    },

    handleDeleteProfile: async (_, {email, name, uid}) => {
      const currentUser = firebase.auth().currentUser.delete();
    },

    handleLogout: async (_, {email, name, uid}) => {
      const currentUser = firebase.auth().signOut();
    },
  },
};
