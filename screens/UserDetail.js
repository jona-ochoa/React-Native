import React from "react";
import { Button, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { SocialIcon } from "react-native-elements";

const UserDetail = (props) => {
  const list = [
    {
      name: "Amy Farha",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Vice President",
    },
    {
      name: "Chris Jackson",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
    },
  ];
  return (
    <View>
      <SocialIcon type="twitter" />
      <SocialIcon raised={false} type="gitlab" />
      <SocialIcon title="Sign In With Facebook" button type="facebook" />
      <SocialIcon title="Some Twitter Message" button type="twitter" />
      <SocialIcon button type="medium" />
      <SocialIcon button light type="instagram" />
      <View>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider>
             <SocialIcon raised={false} type="gitlab" />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
      <View>
        <Button
          title="USER LIST"
          onPress={() => props.navigation.navigate("CreateGoal")}
        />
      </View>
    </View>
  );
};

export default UserDetail;
