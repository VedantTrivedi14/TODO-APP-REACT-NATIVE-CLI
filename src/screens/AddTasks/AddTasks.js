//import liraries
import React, { Component } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButtons/CustomButtons';
import CustomInput from '../../components/CustomInputs/CustomInput';

const AddTask = () => {

    const { control, handleSubmit, watch } = useForm();

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 34,
                    marginBottom: 25,
                }}>
                    Add Task
                </Text>

                <CustomInput
                    name="taskTitle"
                    control={control}
                    placeHolder={"Title"} secureTextEntry={undefined}
                    rules={{
                        required: 'Title is required',
                    }} />

                <CustomInput
                    name="taskDescription"
                    control={control}
                    placeHolder={"Task Description"} secureTextEntry={undefined}
                    rules={{
                        required: 'Title is required',
                    }} />


            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 50,
        padding: 10,
    },
});

export default AddTask;
