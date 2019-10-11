/** Algorithm for Background */
const ShapesData = {
  light: {
    shape1: {
      source: 'images/Circle-Light.png',
      type: 'circle'
    },
    shape2: {
      source: 'images/Rectangle-Light.png',
      type: 'rectangle'
    }
  },
  dark: {
    shape1: {
      source: 'images/Circle-Dark.png',
      type: 'circle'
    },
    shape2: {
      source: 'images/Rectangle-Dark.png',
      type: 'rectangle'
    }
  }
}

const ShapesConfiguration = {
  // CIRCLE DATA
  circle: {
    sizes: {
      size1: {
        value: '10%',
        percentage: .1,
        positions: {
          left: {
            left1: -150, left2: -100, left3: -50
          },
          right: {
            right1: 350, right2: 400, right3: 450
          }
        }
      },
      size2: {
        value: '15%',
        percentage: .15,
        positions: {
          left: {
            left1: -250, left2: -200, left3: -150, left4: -100
          },
          right: {
            right1: 250, right2: 300, right3: 350, right4: 400, right5: 450
          }
        }
      },
      size3: {
        value: '20%',
        percentage: .2,
        positions: {
          left: {
            left1: -350, left2: -300, left3: -250, left4: -200, left5: -150
          },
          right: {
            right1: 200, right2: 250, right3: 300, right4: 350, right5: 400, right6: 450
          }
        }
      },
      size4: {
        value: '25%',
        percentage: .25,
        positions: {
          left: {
            left1: -450, left2: -400, left3: -350, left4: -300, left5: -250, left6: -200
          },
          right: {
            right1: 150, right2: 200, right3: 250, right4: 300, right5: 350, right6: 400, right7: 450
          }
        }
      },
      size5: {
        value: '30%',
        percentage: .3,
        positions: {
          left: {
            left1: -550, left2: -500, left3: -450, left4: -400, left5: -350, left6: -300
          },
          right: {
            right1: 150, right2: 200, right3: 250, right4: 300, right5: 350, right6: 400, right7: 450
          }
        }
      },
    }
  },
  // RECTANGLE DATA
  rectangle: {
    sizes: {
      size1: {
        value: '10%',
        percentage: .1,
        positions: {
          left: {
            left1: -70, left2: -60, left3: -50, left4: -40
          },
          right: {
            right1: 430, right2: 440, right3: 450, right4: 460, right5: 470
          }
        }
      },
      size2: {
        value: '15%',
        percentage: .15,
        positions: {
          left: {
            left1: -50, left2: -100
          },
          right: {
            right1: 400, right2: 450
          }
        }
      },
      size3: {
        value: '20%',
        percentage: .2,
        positions: {
          left: {
            left1: -100, left2: -150
          },
          right: {
            right1: 400, right2: 450
          }
        }
      },
      size4: {
        value: '25%',
        percentage: .25,
        positions: {
          left: {
            left1: -100, left2: -150, left3: -200
          },
          right: {
            right1: 350, right2: 400, right3: 450
          }
        }
      },
      size5: {
        value: '30%',
        percentage: .3,
        positions: {
          left: {
            left1: -150, left2: -200, left3: -250
          },
          right: {
            right1: 350, right2: 400, right3: 450
          }
        }
      },
    }
  }
}

const colorArray = {
  dark: 'dark',
  light: 'light'
}

const sides = {
  left: 'left',
  right: 'right'
}

const rotationDegrees = {
  deg1: 0,
  deg2: 0,
  deg3: 0,
  deg4: 5,
  deg5: 10,
  deg6: 15,
  deg7: 15,
  deg8: 20
}

const verticalPositions = {
  verPos1: 0,
  verPos2: 0,
  verPos3: 0,
  verPos4: 0,
  // verPos5: 0,
  // verPos6: 0,
  verPos7: -50,
  // verPos8: -50,
  // verPos9: -50,
  verPos10: -100,
  // verPos11: -100,
  // verPos12: -100,
  // verPos13: -150,
  // verPos14: -150,
  verPos15: -150,
  // verPos16: -200,
  // verPos17: -200,
  // verPos18: -200,
  // verPos19: -250,
  // verPos20: -250,
  // verPos21: -250,
  // verPos22: -250,
  // verPos23: -300,
  // verPos24: -300,
  // verPos25: -300
}

function pickAttributeRandomly (object) { // returns ramdom key
  var keys = Object.keys(object)

  return keys[keys.length * Math.random() << 0]
}

//  <img src="images/Rectangle-Light.png" height="25%" />

/** Button Click */
var btnGenerate = document.getElementById('btn_generate')

btnGenerate.onclick = () => {
  let backgroundDiv = document.getElementById('bg_generator')
  backgroundDiv.innerHTML = ""

  // Generate 10 images ramdomly
  for (i = 0; i < 10; i++) {
    // Pick ShapeData
    const pickedColor = colorArray[pickAttributeRandomly(colorArray)]
    const shapesByColor = ShapesData[pickedColor]

    const randomShapeKey = pickAttributeRandomly(shapesByColor)
    const pickedShape = shapesByColor[randomShapeKey]
    const { source, type } = pickedShape

    // Pick size data by type 
    const shapeConfiguration = ShapesConfiguration[type]
    const { sizes } = shapeConfiguration
    const sizeRandomKey = pickAttributeRandomly(sizes)
    const pickedSize = sizes[sizeRandomKey]

    // Pick side 
    const sideRandomKey = pickAttributeRandomly(sides)
    const pickedSide = sides[sideRandomKey]

    // Pick position based on sizes
    const { positions: { [pickedSide]: positionValues } } = pickedSize
    const positionValueRamdomKey = pickAttributeRandomly(positionValues)
    const pickedPositionValue = positionValues[positionValueRamdomKey]

    // Pick rotation value
    const degreeRamdomKey = pickAttributeRandomly(rotationDegrees)
    let pickedRotationDegree = rotationDegrees[degreeRamdomKey]
    pickedRotationDegree = pickedSide === 'left' ? pickedRotationDegree * -1 : pickedRotationDegree

    // Pick vertical position
    const verPositionRandomKey = pickAttributeRandomly(verticalPositions)
    const pickedVerticalPosition = verticalPositions[verPositionRandomKey]

    // Crate Image
    const image = document.createElement("IMG")
    image.style.display = 'block'
    image.src = source
    image.style.height = pickedSize.value
    image.style.transform = `translateX(${pickedPositionValue}px) rotate(${pickedRotationDegree}deg) translateY(${pickedVerticalPosition}px)`

    // Append in background
    backgroundDiv.appendChild(image)

  }
}

