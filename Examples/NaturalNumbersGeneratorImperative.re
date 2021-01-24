let naturalNumbers = (): Gen.t(int) => {
  let n = ref(1);
  () => {
    let cur = n^;
    n := n^ + 1;
    Some(cur);
  };
};

let nats = naturalNumbers();

Gen.nth(0,nats)|>Js.log // 1
Gen.nth(0,nats)|>Js.log // 2
Gen.nth(0,nats)|>Js.log // 3
