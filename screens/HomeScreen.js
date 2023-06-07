import { Text, View } from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import PROMOTIONS from '../shared/promotions';
import PARTNERS from '../shared/partners';

const [campsites, setCampsites] = useState(CAMPSITES);
const [promotions, setPromotions] = useState(PROMOTIONS);
const [partners, setPartners] = useState(PARTNERS);

const featCampsite = campsites.find((item) => item.featured);
const featPartner = campsites.find((item) => item.featured);
const featPromotion = campsites.find((item) => item.featured);

const FeaturedItem = ({ item }) => {
    if (item) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={item.image} >
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>{item.name}</Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{item.description}</Text>
            </Card>
        )
    }
    return <View />;
}
const HomeScreen = () => {
    return (
        <ScrollView >
            <FeaturedItem item={featCampsite} />
            <FeaturedItem item={featPromotion} />
            <FeaturedItem item={featPartner} />

        </ScrollView>
    )
}

export default HomeScreen;