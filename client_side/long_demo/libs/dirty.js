// Generated by CoffeeScript 1.6.3
Array.extend({
  sentence: function(conjunction) {
    var lastWordConjunction, sentence, twoWordConjunction;
    sentence = "";
    twoWordConjunction = void 0;
    lastWordConjunction = void 0;
    if (this.length === 0) {
      return sentence;
    }
    if (typeof conjunction !== "string") {
      conjunction = "and";
    }
    twoWordConjunction = " " + conjunction + " ";
    lastWordConjunction = " " + conjunction + " ";
    switch (this.length) {
      case 1:
        sentence = this[0];
        break;
      case 2:
        sentence = this.join(twoWordConjunction);
        break;
      default:
        sentence = this.first(this.length - 1).join(", ") + lastWordConjunction + this.last();
    }
    return sentence;
  },
  spigot: function(fn) {
    var all, the;
    the = this;
    all = {
      "true": [],
      "false": []
    };
    the.forEach(function(v) {
      if (fn(v)) {
        return all["true"].push(v);
      } else {
        return all["false"].push(v);
      }
    });
    return all;
  },
  duplicates: function(field) {
    var i, results, the;
    the = this;
    if (field) {
      the = the.grab(field);
    }
    the = the.sort();
    results = [];
    i = 0;
    while (i < the.length - 1) {
      if (the[i + 1] === the[i]) {
        results.push(the[i]);
      }
      i++;
    }
    return results;
  },
  overlap: function(arr2) {
    return this.filter(function(v) {
      return arr2.some(function(v2) {
        return v === v2;
      });
    });
  },
  topk: function() {
    var freq, i, length, the, top;
    the = this;
    length = the.length || 1;
    freq = {};
    i = the.length - 1;
    while (i > -1) {
      if (freq[the[i]] == null) {
        freq[the[i]] = 1;
      } else {
        freq[the[i]]++;
      }
      i--;
    }
    top = Object.keys(freq).sort(function(a, b) {
      return freq[b] - freq[a];
    });
    return top.map(function(v) {
      return {
        value: v,
        count: freq[v]
      };
    });
  },
  print: function() {
    return console.log(JSON.stringify(this, null, 2));
  },
  random: function() {
    var arr;
    arr = this;
    return arr[Math.floor(Math.random() * arr.length)];
  },
  has: function(f) {
    return this.some(f);
  },
  includes: function(f) {
    return this.some(f);
  },
  not_in: function(arr2) {
    return this.filter(function(a) {
      return !arr2.some(a);
    });
  },
  yesmap: function(fn) {
    return this.map(function(x) {
      return fn(x);
    }).compact();
  },
  firstmap: function(fn) {
    var x;
    x = this.find(function(x) {
      return fn(x);
    });
    if (x) {
      return fn(x);
    }
  }
});

Number.extend({
  percent: function(fn) {
    if (this >= Math.floor(Math.random() * 100)) {
      return fn();
    }
  },
  percent_distributed: function(fn1, fn2) {
    if (this >= Math.floor(Math.random() * 100)) {
      return fn1();
    } else {
      return fn2();
    }
  },
  percent_of: function(x) {
    var num;
    if (num === 0 || x === 0) {
      return 0;
    }
    num = this / 100;
    return x * num;
  },
  delay: function(fn) {
    var num;
    num = this;
    return setTimeout(fn, num);
  },
  random: function() {
    return Math.floor(Math.random() * this);
  },
  randomto: function(to) {
    var num;
    if (to == null) {
      to = 100;
    }
    num = this;
    return Math.floor(Math.random() * to) + num;
  },
  "in": function(arr) {
    var num;
    num = this;
    return arr.some(num);
  },
  is_in: function(arr) {
    var num;
    num = this;
    return arr.some(num);
  },
  choosenot: function(nay) {
    var choose, count, upto;
    count = 0;
    upto = this;
    choose = function() {
      var x;
      x = Math.floor(Math.random() * upto);
      if (x === nay && count < 30) {
        count++;
        return choose();
      } else {
        return x;
      }
    };
    return choose();
  }
});

Object.extend({
  to_a: function(obj) {
    var x;
    x = [];
    Object.each(obj, function(k, v) {
      return x.push([k, v]);
    });
    return x;
  }
});
