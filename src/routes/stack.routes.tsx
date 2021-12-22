import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookDetails } from '../screens/BookDetails';
import { Bookshelf } from '../screens/Bookshelf';
import { Category } from '../screens/Category';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Bookshelf">
      <Screen
        name="Bookshelf"
        component={Bookshelf}
        options={{ headerShown: false }}
      />
      <Screen
        name="BookDetails"
        component={BookDetails}
        options={{ title: '', headerShown: false }}
      />
      <Screen
        name="Category"
        component={Category}
        options={{ title: '', headerShown: false }}
      />
    </Navigator>
  );
}
