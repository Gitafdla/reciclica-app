import { AppState } from "src/store/AppState";

export const AppInitialState: AppState = {
    loading: {
        show: false
    },
    login: {
        error: null,
        isLoggedIn: false,
        isLogginIn: false,
        isRecoveredPassword: false,
        isRecoveringPassword: false
    },
    register: {
        error: null,
        isRegistered: false,
        isRegistering: false
    }
}
