import React, { Component } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import CustomButton from '../../components/CustomButtons/CustomButtons';
import CustomInput from '../../components/CustomInputs/CustomInput';


const AddUser = () => {

    const { control, handleSubmit, watch } = useForm();

    const addUserToDb = (data)  => {
        alert("User has been added successfully")
        console.log(data, "data");
        console.log(data.username)
        
    }

    const showUsersList = () => {


    }


    return (
        <View style={{
            margin: 10,
            marginTop: 100
        }}>

            <Text style = {{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize : 34,
                marginBottom : 50,
            }}>
                Add User
            </Text>

            <CustomInput
                rules={{
                    required: 'Username is required',
                    minLength: { value: 3, message: 'Username should be at least 3 characters long' },
                    maxLength: { value: 24, message: 'Username should not be more than 24 characters long' }
                }}
                
                name="username"
                control={control}
                placeHolder={"Username"} secureTextEntry={undefined} />

            <CustomInput

                rules={{
                    required: 'User Id is required',
                    minLength: { value: 3, message: 'User Id should be at least 3 characters long' },
                    maxLength: { value: 24, message: 'User Id should not be more than 24 characters long' }
                }}
                name="userid"
                control={control}
                placeHolder={"User Id"} secureTextEntry={false} />

            <CustomButton
                onPress={handleSubmit(addUserToDb)}
                text="Add User"
                fgColor={undefined}
                bgColor={undefined}
                type="PRIMARY" />

            <CustomButton
                onPress={handleSubmit(showUsersList)}
                text="Registered Users"
                fgColor={undefined}
                bgColor={undefined}
                type="SECONDARY" />
        </View>
    );
};




export default AddUser;
