import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
} from "native-base";
const cards = [
  {
    text: "Brewery One",
    name: "One",
    image: require("../../assets/images/icon-192x192.png"),
  },
  {
    text: "Brewery Two",
    name: "Two",
    image: require("../../assets/images/QR_Code.png"),
  },
  {
    text: "Brewery Three",
    name: "Three",
    image: require("../../assets/images/beer_clear.png"),
  },
];
export default class SwipeCard extends Component {
  render() {
    return (
      <Container>
        <Text>Swipe left or right.</Text>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={(item) => (
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: "#ED4A6A" }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    );
  }
}
