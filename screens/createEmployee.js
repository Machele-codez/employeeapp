import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import * as ImagePicker from 'expo-image-picker';
import * as Camera from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';


// ! Must be in the same format, key names are important!
const getImageObjectFromData = (data) => ({
    uri: data.uri,
    type: `image/${data.uri.split('.').slice(-1)}`,
    name: data.uri.split('/').slice(-1).join("").split(".").shift()
});

const CreateEmployee = () => {

    // create a state variable - `name`
    // and a method to update it - `setName`
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [salary, setSalary] = useState("");
    const [picture, setPicture] = useState("");
    const [modal, setModal] = useState(false);

    // function to pick image from image library
    const getImageFromDevice = async () => {
        // request user permission to access image library
        const { granted } = await MediaLibrary.requestPermissionsAsync();

        // if permission is granted
        if (granted) {
            // launch image picker
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images, // restrict to show only images
                allowsEditing: true, // allow cropping of picked image
                aspect: [1, 1], // aspect ratio
                quality: 0.7, // image quality -> from 0 to 1
            })

            if (!data.cancelled) {
                let image = getImageObjectFromData(data);
                uploadImageToCloud(image); // upload image to cloud
            }

        } else {
            // alert user 
            Alert.alert("Permission to access files is required to upload image");
        }

    };

    // function to pick image from camera
    const getImageFromCamera = async () => {
        // request user permission to access camera
        const { granted } = await Camera.requestPermissionsAsync();

        // if permission is granted
        if (granted) {
            // launch camera
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images, // restrict to allow only images
                allowsEditing: true, // allow cropping of picked image
                aspect: [1, 1], // aspect ratio
                quality: 0.7, // image quality -> from 0 to 1
            })

            if (!data.cancelled) {
                let image = getImageObjectFromData(data);
                uploadImageToCloud(image); // upload image to cloud
            }

        } else {
            // alert user 
            Alert.alert("Permission to access files is required to upload image");
        }

    };

    // function to upload image to cloud storage
    const uploadImageToCloud = (image) => {

        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "employeeapp");
        formData.append("cloud_name", "machele-codez");

        fetch("https://api.cloudinary.com/v1_1/machele-codez/image/upload", {
            method: "POST",
            body: formData
        })
            .then(async response => {
                const data = await response.json();
                console.log("success");
                console.log(data);

                setPicture(data.url); // set picture state to image URL
                setModal(false); // hide modal
            })
            .catch(error => {
                console.log("error");
                console.log(error);
            })
    }


    return (
        <View style={styles.root}>
            <TextInput
                label="Name"
                value={name}
                mode="outlined"
                style={styles.inputStyle}
                theme={theme}
                onChangeText={text => setName(text)}
            />
            <TextInput
                label="Email"
                value={email}
                mode="outlined"
                style={styles.inputStyle}
                theme={theme}
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label="Phone"
                value={phone}
                mode="outlined"
                style={styles.inputStyle}
                theme={theme}
                keyboardType="number-pad"
                onChangeText={text => setPhone(text)}
            />
            <TextInput
                label="Salary"
                value={salary}
                mode="outlined"
                style={styles.inputStyle}
                theme={theme}
                onChangeText={text => setSalary(text)}
            />

            <Button
                icon={picture === "" ? "upload" : "check"}
                mode="contained"
                onPress={() => setModal(true)}
                theme={theme}
                style={styles.inputStyle}
            >
                Upload Image
            </Button>

            <Button
                icon="content-save"
                mode="contained"
                onPress={() => console.log("saved")}
                theme={theme}
                style={styles.inputStyle}
            >
                Save
            </Button>

            <Modal
                animationType="slide"
                transparent
                visible={modal}
                onRequestClose={() => setModal(false)} // when the back button is tapped
            >
                <View style={styles.modalContainerView}>

                    <View style={styles.uploadOptionsView}>
                        <Button
                            icon="camera"
                            mode="contained"
                            onPress={() => getImageFromCamera()}
                            theme={theme}
                        >
                            Camera
                        </Button>
                        <Button
                            icon="image-area"
                            mode="contained"
                            onPress={() => getImageFromDevice()}
                            theme={theme}
                        >
                            Gallery
                        </Button>
                    </View>

                    <Button
                        icon="close"
                        onPress={() => setModal(false)}
                        theme={theme}
                    >
                        Cancel
                    </Button>
                </View>

            </Modal>

        </View>
    )
}

const theme = {
    colors: {
        primary: "#006aff"
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 10,
    },
    inputStyle: {
        margin: 5,
    },
    modalContainerView: {
        width: "100%",
        height: 150,
        position: "absolute",
        bottom: 0,
        justifyContent: "space-around",
        flex: 1,
        backgroundColor: "white"
    },
    uploadOptionsView: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
})

export default CreateEmployee;