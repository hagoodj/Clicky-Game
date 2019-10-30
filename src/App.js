import React, { Component } from "react";
import FriendCard from "./components/ClickyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentscore: 0,
    bestscore: 0
  };

  clicked = id => {
    this.state.friends.find((element, i) => {
      if (element.id === id) {
        if (friends[i].clicked === false) {
          friends[i].clicked = true;
          this.setState({ currentscore: this.state.currentscore + 1 }, function () {
          });
          this.state.friends.sort(() => 0.5 - Math.random())
          return true;
        } else {
          this.endGame();
        }
      }
    });
  }

  endGame = () => {
    if (this.state.currentscore > this.state.bestscore) {
      this.setState({ bestscore: this.state.currentscore }, function () {
      });
    }
    this.state.friends.forEach(friend => {
      friend.clicked = false;
    });
    alert("Game Over");
    this.setState({ currentscore: 0 });
    return true;
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title currentscore={this.state.currentscore} bestscore={this.state.bestscore}>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clicked={this.clicked}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
