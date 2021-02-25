import React, { Component } from "react";
import { Image } from "react-native";
import IconsMolecule from "../molecules/IconsMolecule";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
export default class CardTest extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "gray" }} />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  style={{ width: 350, height: 200 }}
                  source={{
                    uri:
                      "https://cdn.craftbeer.com/wp-content/uploads/2014/10/14192018/Blvd-Logo_White.jpg",
                  }}
                />
                <Body>
                  <Text style={{ marginLeft: 12 }}>
                    Boulevard Brewing Company
                  </Text>
                  <Text note style={{ marginLeft: 12 }}>
                    Kansas City, MO
                  </Text>
                  <IconsMolecule></IconsMolecule>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Text>
                Text will go here. It can either be the user review, the brewery
                supplied "about us", or could be omitted for search results.
              </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
