import React from "react";
import { ScrollView } from "react-native";
import { Avatar, Card, ListItem, Text } from 'react-native-elements';
import { PARTNERS } from "../shared/partners.js";
import { useState } from "react";

const AboutScreen = () => {
    // const [partner, setPartner] = useState(PARTNERS);
    const [partners, setPartners] = useState(PARTNERS);

    return (
        <ScrollView>
            {/* @@ -15,23 +15,25 @@ const AboutScreen = () => { */}
            <Card>

                <Card.Title>Community Partners</Card.Title>
                <Card.Divider />
                {partners.map((partner) => {
                    <ListItem key={partner.id}>
                        <Avatar rounded source={partner.image} />
                        <ListItem.Content>
                            <ListItem.Title>
                                {partner.name}
                            </ListItem.Title>
                            <ListItem.Subtitle>
                                {partner.description}
                            </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>;
                })}


                <Card.Divider />

                <Text>
                    {partners.map((partner) => {
                        <ListItem key={partner.id}>
                            <Avatar rounded source={partner.image} />
                            <ListItem.Content>
                                <ListItem.Title>
                                    {partner.name}
                                </ListItem.Title>
                                <ListItem.Subtitle>
                                    {partner.description}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>;
                    })}
                </Text>
            </Card>
        </ScrollView>

    )

};


export default AboutScreen;
