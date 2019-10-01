import * as React from 'react';
import { Button, Image, View, Text, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import axios from "axios"







export default class ImagePickerExample extends React.Component {
    state = {
        image: null,
    };


    creatFormData = (image, body) => {
        const data = new FormData();
        data.append("image", {
            // name: image.fileName,
            type: image.type,
            uri: Platform.OS === 'android' ? image.uri : image.uri.replace("file://", ""),
        })
        Object.keys(body).forEach(key => {
            data.append(key, body[key]);
        })
        return data;
    }

    handleUpload = () => {
        console.log("hi")
        // axios.post("http://10.60.114.46:9000/photo/upload", x)
        //     // .then(response => response.json())
        //     .then(response => {
        //         console.log('upload succes', response);
        //         alert('upload succes');
        //         this.setState({ image: null });
        //     })
        //     .catch(error => {
        //         console.log('upload error', error);
        //         alert("upload faild")
        //     });
    };

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            await this.setState({ image: result });
        }
        console.log("FINAL:", this.state.image.uri)

    };
    render() {
        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                {this.state.image && (
                    <React.Fragment>

                        <Image source={{ uri: this.state.image.uri }} style={{ width: 200, height: 200 }} />

                        <Button title="upload photo"
                            style={{ padding: 10 }}
                            onPress={this.handleUpload} />
                    </React.Fragment>
                )}



                <Button
                    title="Pick an image "
                    onPress={this._pickImage}
                />


<Button title="upload photo"
                            style={{ padding: 10 }}
                            onPress={this.handleUpload} />


            </View>
        );
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    // _pickImage = () => {
    //     const options = {
    //         noData: true
    //     }
    //     ImagePicker.launchImageLibrary(options, response => {
    //         if (response.uri) {
    //             this.setState({ image: response })
    //         }

    //     })


    // }



}