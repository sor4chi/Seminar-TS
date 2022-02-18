interface Msg {
  type: string;
}

interface PlusMsg extends Msg {
  type: "PlusMsg";
  value: number;
}

interface MinusMsg extends Msg {
  type: "MinusMsg";
  value: number;
}

interface ResetMsg extends Msg {
  type: "ResetMsg";
}

type CounterMsg = PlusMsg | MinusMsg | ResetMsg;

interface Counter {
  count: number;
}

const update =
  (state: Counter) =>
  (msg: CounterMsg): Counter => {
    switch (msg.type) {
      case "PlusMsg":
        return { count: state.count + msg.value };
      case "MinusMsg":
        return { count: state.count - msg.value };
      case "ResetMsg":
        return { count: 0 };
    }
  };
