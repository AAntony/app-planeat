import React, { Component } from 'react'

import { firebaseApp } from './base'
import 'firebase/firestore'
import 'firebase/auth'

class Firebase extends Component {
  constructor (props) {
    super(props)

    this.auth = firebaseApp.auth()
    this.db = firebaseApp.database()
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)

  handleSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)
 
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)

  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`)
 
  users = () => this.db.ref('users')

  render() {
    return null
  }
}

export default Firebase
