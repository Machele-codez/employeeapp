import React from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Card, FAB } from 'react-native-paper';

const Home = ({ navigation }) => {

    const employeeList = [{
        "employee_id": 1,
        "name": "Carline Waycott",
        "email": "cwaycott0@ca.gov",
        "role": "ML Expert",
        "phone": "392-823-2079",
        "salary": 56874.52,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/75.jpg"
      }, {
        "employee_id": 2,
        "name": "Tanitansy Henrot",
        "email": "thenrot1@twitpic.com",
        "role": "Project Manager",
        "phone": "398-887-7989",
        "salary": 58985.59,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/72.jpg"
      }, {
        "employee_id": 3,
        "name": "Candie Wellfare",
        "email": "cwellfare2@pen.io",
        "role": "Backend Engineer",
        "phone": "577-516-5509",
        "salary": 30207.02,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/75.jpg"
      }, {
        "employee_id": 4,
        "name": "Royall Mayo",
        "email": "rmayo3@wufoo.com",
        "role": "ML Expert",
        "phone": "540-838-9266",
        "salary": 15750.53,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/75.jpg"
      }, {
        "employee_id": 5,
        "name": "Micky Spikings",
        "email": "mspikings4@economist.com",
        "role": "Project Manager",
        "phone": "478-562-8671",
        "salary": 51754.12,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/70.jpg"
      }, {
        "employee_id": 6,
        "name": "Mildrid Cuseck",
        "email": "mcuseck5@ft.com",
        "role": "Project Manager",
        "phone": "646-599-7975",
        "salary": 47490.85,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/72.jpg"
      }, {
        "employee_id": 7,
        "name": "Eadmund Chown",
        "email": "echown6@issuu.com",
        "role": "Project Manager",
        "phone": "307-319-4435",
        "salary": 54890.09,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/72.jpg"
      }, {
        "employee_id": 8,
        "name": "Chadd Wainscot",
        "email": "cwainscot7@rediff.com",
        "role": "Project Manager",
        "phone": "176-895-5335",
        "salary": 33863.84,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/75.jpg"
      }, {
        "employee_id": 9,
        "name": "Cristionna Shipp",
        "email": "cshipp8@aboutads.info",
        "role": "Project Manager",
        "phone": "312-277-1430",
        "salary": 19786.34,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/45.jpg"
      }, {
        "employee_id": 10,
        "name": "Floria MacCheyne",
        "email": "fmaccheyne9@zdnet.com",
        "role": "Project Manager",
        "phone": "367-324-6963",
        "salary": 19223.54,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/71.jpg"
      }, {
        "employee_id": 11,
        "name": "Harlen Keatley",
        "email": "hkeatleya@phoca.cz",
        "role": "Project Manager",
        "phone": "274-175-2145",
        "salary": 34874.22,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/35.jpg"
      }, {
        "employee_id": 12,
        "name": "Devonna Hanhard",
        "email": "dhanhardb@java.com",
        "role": "Backend Engineer",
        "phone": "142-501-3717",
        "salary": 10895.39,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/35.jpg"
      }, {
        "employee_id": 13,
        "name": "Anni Peachman",
        "email": "apeachmanc@admin.ch",
        "role": "ML Expert",
        "phone": "170-256-9507",
        "salary": 8618.8,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/75.jpg"
      }, {
        "employee_id": 14,
        "name": "Trace Gernier",
        "email": "tgernierd@addtoany.com",
        "role": "ML Expert",
        "phone": "750-783-0084",
        "salary": 42215.54,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/70.jpg"
      }, {
        "employee_id": 15,
        "name": "Ferrell Picknett",
        "email": "fpicknette@wikispaces.com",
        "role": "Backend Engineer",
        "phone": "187-309-9541",
        "salary": 47744.29,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/70.jpg"
      }, {
        "employee_id": 16,
        "name": "Marinna Coultous",
        "email": "mcoultousf@jigsy.com",
        "role": "ML Expert",
        "phone": "289-715-1324",
        "salary": 14698.81,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/70.jpg"
      }, {
        "employee_id": 17,
        "name": "Petronilla Posthill",
        "email": "pposthillg@youtube.com",
        "role": "Backend Engineer",
        "phone": "182-975-5752",
        "salary": 26936.41,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/71.jpg"
      }, {
        "employee_id": 18,
        "name": "Westbrook Brealey",
        "email": "wbrealeyh@tinyurl.com",
        "role": "Web Developer",
        "phone": "128-220-8731",
        "salary": 19620.03,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/45.jpg"
      }, {
        "employee_id": 19,
        "name": "Alaric Duker",
        "email": "adukeri@desdev.cn",
        "role": "Backend Engineer",
        "phone": "644-886-5159",
        "salary": 27474.08,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/72.jpg"
      }, {
        "employee_id": 20,
        "name": "Randell Dallicoat",
        "email": "rdallicoatj@t.co",
        "role": "Backend Engineer",
        "phone": "214-353-2081",
        "salary": 30751.37,
        "profilePictureURL": "https://randomuser.me/api/portraits/men/71.jpg"
      }]

    // create JSXElements from objects in array
    const renderData = employee => (
        <Card
            style={styles.card}
            onPress={() => navigation.navigate("Profile", employee)}
        >
            <View style={styles.cardView}>
                <Image
                    source={{ uri: employee.profilePictureURL }}
                    style={{ height: 60, width: 60, borderRadius: 60 / 2 }}

                />
                <View style={{ marginLeft: 15 }}>
                    <Text style={styles.cardText}>{employee.name}</Text>
                    <Text style={styles.cardText}>{employee.role}</Text>
                </View>
            </View>
        </Card>
    )

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={employeeList}
                renderItem={({ item }) => renderData(item)}
                keyExtractor={item => `${item.employee_id}`}
            />
            <FAB
                onPress={() => navigation.navigate("Create")}
                style={styles.plusBtn}
                icon="plus"
                theme={{ colors: { accent: "#006aff" } }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 5,
        padding: 5,
    },
    cardView: {
        flexDirection: "row",
        padding: 6,
        alignItems: "center",
    },
    cardText: {
        fontSize: 16,
    },
    plusBtn: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})

export default Home;