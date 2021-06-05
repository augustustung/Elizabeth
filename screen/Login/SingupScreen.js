import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import FormInput from '../../Components/FormInput'
import { auth } from '../../Constant/firebase'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const register = () =>{ 
        auth.createUserWithEmailAndPassword(email, pass)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: "https://firebasestorage.googleapis.com/v0/b/storageuser-41682.appspot.com/o/images.png?alt=media&token=eb825db0-ce85-47a8-a6ac-14f3d1af673c",
            })
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>

            <FormInput
                labelVal={name}
                onChangeText={name => setName(name)}
                placeholder='Full name'
                iconName='user'
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelVal={email}
                onChangeText={userEmail => setEmail(userEmail)}
                placeholder='Email'
                iconName='user'
                keyBoardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput 
                labelVal={pass}
                onChangeText={userPass => setPass(userPass)}
                placeholder='Password'
                iconName='lock'
                secureTextEntry={true}
            />

            <FormButton 
                buttonTitle="Register"
                onPress={register}
            />

            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Have an account? Sign In!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafd',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover'
    },
    text: {
        // fontFamily
        fontSize: 28,
        fontWeight: '500',
        color: '#2e64e5',
        top: -20
    },
    navButton: {
        marginTop: 15
    },
    forgotButton: {
        marginVertical: 35
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        // fontFamily
    },

})