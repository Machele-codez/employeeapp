import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const Profile = ({ route }) => {

    const openDial = () => {
        if (Platform.OS === "android")
            Linking.openURL("tel:+2335432120696")
        else
            Linking.openURL("telprompt:+233543210696")
    };

    return (
        <View style={styles.root}>
            {/* gradient background */}
            <LinearGradient
                colors={["#006aff", "#6bc1ff"]}
                style={{ height: "20%" }}
            />

            {/* profile image */}
            <View style={{ marginTop: -75, alignItems: "center" }}>
                <Image
                    style={{ width: 150, height: 150, borderRadius: 150 / 2 }}
                    source={{ uri: route.params.image }}
                />
            </View>
            {/* profile image END */}

            <View style={{ alignItems: "center", marginBottom: 15 }}>
                <Title>{route.params.name}</Title>
                <Text style={{ fontSize: 16 }}>{route.params.role}</Text>
            </View>

            {/* employee detail cards */}
            <Card style={styles.card}
                onPress={() => {
                    Linking.openURL(`mailto:${route.params.email}`);
                }}
            >
                <View style={styles.cardContentView}>
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.cardText}>{route.params.email}</Text>
                </View>
            </Card>
            <Card 
                style={styles.card}
                onPress={ () => openDial() }
            >
                <View style={styles.cardContentView}>
                    <MaterialIcons name="phone" size={32} color="#006aff" />
                    <Text style={styles.cardText}>{route.params.phone}</Text>
                </View>
            </Card> 
            <Card style={styles.card}>
                <View style={styles.cardContentView}>
                    <MaterialIcons name="attach-money" size={32} color="#006aff" />
                    <Text style={styles.cardText}>{route.params.salary}</Text>
                </View>
            </Card>
            {/* employee detail cards END */}

            {/* action buttons */}
            <View style={styles.actionButtonsView}>
                <Button
                    theme={theme}
                    icon="account-edit"
                    mode="contained"
                    onPress={() => console.log("Edit")}
                >
                    Edit
                </Button>
                <Button
                    theme={theme}
                    icon="delete"
                    mode="contained"
                    onPress={() => console.log("Fire Employee")}
                >
                    Fire Employee
                </Button>
            </View>
            {/* action buttons END */}



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
    },
    card: {
        margin: 5,
        padding: 5
    },
    cardContentView: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
    },
    cardText: {
        marginLeft: 5
    },
    actionButtonsView: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10,
    }
})

export default Profile;