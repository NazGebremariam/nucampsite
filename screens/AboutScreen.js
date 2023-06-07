import { ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { Avatar } from "react-native-elements";
import { partners } from "../shared/partners";

const AboutScreen = () => {
    <ScrollView>
        <Card style={{ margin: 10 }} >
            <Card.Title>Our Mission</Card.Title>
            <Card.Divider></Card.Divider>
         {partners.map((partner) => {
              return (
                <ListItem  key={partner.id}>
                <Avatar source={partner.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{partner.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {partner.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
                </ListItem>
              )  
             })
            } 
        </Card>
    </ScrollView>
}
export default AboutScreen;