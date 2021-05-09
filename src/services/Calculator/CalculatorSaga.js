import { all, put, select, takeLatest } from 'redux-saga/effects';

import { calculator as calculatorActions } from './CalculatorActions';

function* setOperation({ payload }) {

  const { operation, numbers, operators } = yield select(state => state.calculator);

  if (payload.operation === 'AC') {
    yield cleanCalculator();
    return;
  };

  if (payload.operation === 'CLEAN') {
    yield put(calculatorActions.setState('operation', operation.slice(0, -1)))
    return;
  };

  if (payload.operation === '=') {
    yield calculateTotal();
    return;
  };

  if (Number.isInteger(payload.operation)) {
    let newNumbers = numbers;
    newNumbers.push(payload.operation);

    yield put(calculatorActions.setState('numbers', newNumbers))
  } else {
    if (!Number.isInteger(+operation.charAt(operation.length - 1)) || payload.operation === operation.charAt(operation.length - 1)) {
      return;
    }

    let newOperators = operators;
    newOperators.push(payload.operation);

    yield put(calculatorActions.setState('operators', newOperators));
  }

  yield put(calculatorActions.setState('operation', operation + payload.operation));

};

function* cleanCalculator() {
  yield put(calculatorActions.setState('operation', ""));
  yield put(calculatorActions.setState('total', 0));
  yield put(calculatorActions.setState('operators', []));
  yield put(calculatorActions.setState('numbers', []));
}

function* calculateTotal() {

  const { numbers, operators, operation } = yield select(state => state.calculator);
  let total = 0;

  /*numbers?.map((value) => {
    total = total + value;
  });*/

  yield put(calculatorActions.setState('total', eval(operation)));
};

function* actionWatcher() {
  yield takeLatest(calculatorActions.setOperation, setOperation);
};

export default function* CalculatorSaga() {
  yield all([
    actionWatcher()
  ]);
};
