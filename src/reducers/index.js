import Rx from "rxjs";
import CounterReducer$ from "./CounterReducer";

const reducer$ = Rx.Observable.merge(
  CounterReducer$.map(reducer => ["counter", reducer]),
);

export default reducer$;