const loggerMiddleware = (store: { getState: () => any; }) => (next: (arg0: any) => any) => (action: any) => {
    console.log('현재', store.getState());
    
    console.log('액션',action);

    const result = next(action);

    console.log('다음 상태',store.getState());
    console.log('\n');

    return result;
}

export default loggerMiddleware;