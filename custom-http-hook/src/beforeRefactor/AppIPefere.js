import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from '../hooks/use-http';

function App() {

  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback(taskObj => {
    const loadedTasks = [];

    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text }, transformTasks);
    }

    setTasks(loadedTasks);
  }, [])
  /**
   *  Not passing any dependencies
   * As we are not using anything external other that setTasks which is a state updating function
   * state updatting functions within the componentn are guaranteed to never change
   *  */


  // make sure these objects are not recreated when app rerenders
  // can use a useMemo,not sure how though
  // const { isLoading, error, sendRequest } = useHttp({ url: 'https://react-http-6b4a6.firebaseio.com/tasks.json' }, transformTasks);
  const httpData = useHttp(transformTasks);
  const { isLoading, error, sendRequest: fetchTasks } = httpData;

  useEffect(() => {
    fetchTasks({ url: 'https://react-http-6b4a6.firebaseio.com/tasks.json' });
  }, [fetchTasks]);
  // fetch task as a dependency resulted as an infinite rerender
  // so We wrapped sendRequest in a useCallback giving it requestConfig, applyData as dependencies
  // that casued another rerender. see useHttp to see how that was solved

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
