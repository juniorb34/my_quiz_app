import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import DeckList from "../components/DeckList";
import NewDeck from "../components/NewDeck";
import DeckDetail from "../components/DeckDetail";
import AddCard from "../components/AddCard";
import Quiz from "../components/Quiz";

const HomeTabs = createBottomTabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      title: "Decks"
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: "New Deck"
    }
  }
});

const AppNavigator = createStackNavigator({
  Home: HomeTabs,
  DeckDetail: DeckDetail,
  AddCard: AddCard,
  Quiz: Quiz
});

export default createAppContainer(AppNavigator);
