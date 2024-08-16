  import { createRoot } from 'react-dom/client';  // Correct import
  import { Provider } from 'react-redux';
  import { PersistGate } from 'redux-persist/integration/react';
  import { store, persistor } from './components/redux/store'; 
  import App from './App';
  import './index.css';
  import 'react-toastify/dist/ReactToastify.css';
  import { ToastContainer } from 'react-toastify';

  const rootElement = document.getElementById('root'); 

  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        <ToastContainer />
      </Provider>
    );
  }
