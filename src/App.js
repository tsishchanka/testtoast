import './App.css';
import { toastToShow, ToastRefContainer } from '@tsishchanka/edu/dist';

function App() {
  const handleClick = () => {
    toastToShow.addToast({
      type: 'error',
      title: 'Error',
      position: 'top-left',
      autoDelete: 'false',
      deleteDelay: '2000',
      bgColor: 'red',
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={handleClick}>SHOW</button>
        <ToastRefContainer
          type='warning'
          title='Info'
          position='top-left'
          autoDelete={false}
          deleteDelay={2000}
          bgColor='#F4E048'
          description='Info description'
          icon='info'
        />
      </header>
    </div>
  );
}

export default App;
