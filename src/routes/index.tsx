import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { HeaderContent } from "../components/HeaderContent";
import { RepositoryDTO } from "src/dtos/RepositoryDTO";
import { RepositoriesList } from "../screens/RepositoriesList";
import { Repository } from "../screens/Repository";

export type RoutesProps = {
    home: undefined;
    repository: {
        repository: RepositoryDTO
    };
}

export type NavigatorRoutesProps = NativeStackNavigationProp<RoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<RoutesProps>();

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="home"
                    component={RepositoriesList}
                    options={{
                        headerShown: false
                    }}
                />
                <Screen
                    name="repository"
                    component={Repository}
                    options={({ route }) => ({
                        headerTitle: '',
                        headerLeft: () => <HeaderContent title={route.params.repository.name}/>
                    })}
                />
            </Navigator>
        </NavigationContainer>
    )
}