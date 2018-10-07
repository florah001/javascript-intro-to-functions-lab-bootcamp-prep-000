function shout(string) {
  return string.toUpperCase("HELLO");
}
function whisper(string) {
  return string.toLowerCase("hello");
} 
function logShout(string) {
  console.log("HELLO");
}
function logWhisper(string) {
  console.log('hello');
}
 function sayHiToGrandma(string) {
    console.log("hello")
    return string.toLowerCase("i can\'t hear you")
}
if (sayHiToGrandma(string) === "hello") {
  console.log("i can\'t hear you") 
} else if (sayHiToGrandma(string) === "HELLO") {
  console.log("YES INDEED")
}





/*
if (sayHiToGrandma(string) === string.toLowerCase')
return string.toLowerCase("i can\'t hear you")

/*
sayHiToGrandma(string)

describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
/*

 function sayHiToGrandma(string) {
  if(string === string.toLowerCase()) {
    return string.toLowerCase("i can\'t hear you")
      } else if (string === string.toUpperCase()) {
         return string.toUpperCase("YES INDEED")
          }
        }
*/





