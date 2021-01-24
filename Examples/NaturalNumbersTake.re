// const nats = naturalNumbers();
// const firstTen = take(10, nats);

// console.log(firstTen);
let naturalNumbers = (): Gen.t(int) => {
  let n = ref(1);
  () => {
    let cur = n^;
    n := n^ + 1;
    Some(cur);
  };
};
let nats = naturalNumbers();
let firstTen = Gen.take(10, nats);

Js.log(firstTen());

let iter = (~f: 'a => unit, theList: list('a)) => {
  let rec aux = (l) =>
    switch (l) {
    | [] => ()
    | [head, ...tail] =>
      f(head);
      aux(tail);
    };
  aux(theList);
};


  let result = ref([]);
  let f = (x) => {result := [x, ...result^];
  Js.log(result)
  }
  iter(~f, ["a", "b", "c"]);
  let result = ref([]);
  let f = (x) => {result := [x, ...result^];
  Js.log(result.contents)
  }
  iter(~f, ["a", "b", "c","d"]);

