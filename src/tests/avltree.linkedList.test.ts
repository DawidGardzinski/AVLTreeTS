import { AVLTree } from '../dataStructures/AVLTree/AVLTree';

//these tests were performed using snapshots
describe('AVLTree - linkedList', () => {
  const avlTreeTest1 = new AVLTree();
  const keysTest1 = [3, 9, 1, 16, 19, 13, 20];

  keysTest1.forEach((key) => {
    avlTreeTest1.insert(key);
  });

  const avlTreeTest2 = new AVLTree();
  const keysTest2 = [24, 40, 23, 45, 4, 28, 30, 13, 12, 32, 46, 10, 42, 22];

  keysTest2.forEach((key) => {
    avlTreeTest2.insert(key);
  });

  const avlTreeTest3 = new AVLTree();
  const keysTest3 = [
    18, 14, 7, 0, 6, 3, 11, 1, 17, 5, 12, 10, 4, 8, 9, 16, 19, 20, 2,
  ];

  keysTest3.forEach((key) => {
    avlTreeTest3.insert(key);
  });

  const avlTreeTest4 = new AVLTree();
  const keysTest4 = [
    892, 571, 155, 967, 490, 264, 987, 279, 394, 465, 484, 567, 644, 389, 244,
    282, 772, 34, 646, 307, 598, 590,
  ];

  keysTest4.forEach((key) => {
    avlTreeTest4.insert(key);
  });

  const avlTreeTest5 = new AVLTree();
  const keysTest5 = [
    36, 72, 59, 38, 19, 99, 77, 78, 25, 4, 64, 34, 97, 55, 98, 5, 49, 42, 79,
  ];

  keysTest5.forEach((key) => {
    avlTreeTest5.insert(key);
  });

  const avlTreeTest6 = new AVLTree();
  const keysTest6 = [
    1454, 2576, 634, 1108, 724, 2346, 1995, 4731, 4850, 5580, 9602, 250, 6748,
    208, 5375, 7035, 3021, 7514, 5434, 5589, 7931, 418, 6013, 348, 4583, 8210,
    8771, 3549, 7133, 3359, 3847, 9105, 4530, 7316, 469, 6763, 6823, 7873, 7191,
    7715, 1030, 8253, 6472, 8193, 8921, 1463, 6573, 9378, 4478, 5804, 7272,
    8343, 5376, 8140, 8224, 6033, 295, 7730, 5078, 6425, 9539, 4018, 1709, 6523,
    1728, 9859, 3717, 4373, 5808, 578, 9147, 4189, 7904, 6263, 1114, 7463, 9170,
    5912, 32, 633, 7984, 3277, 4947, 749, 8774, 7930, 2171, 1008,
  ];

  keysTest6.forEach((key) => {
    avlTreeTest6.insert(key);
  });

  const avlTreeTest7 = new AVLTree();
  const keysTest7 = [
    4210, 7041, 1067, 9296, 59, 7204, 6177, 4644, 8580, 5363, 9308, 5737, 2578,
    9210, 5577, 6079, 4828, 6671, 1728, 2707, 7004, 7686, 2909, 6516, 8868,
    2254, 1838, 4592, 9337, 7996, 382, 6222, 9205, 2965, 457, 9467, 840, 4871,
    9950, 6627, 1716, 6226, 1275, 4180, 1901, 8994, 2249, 9218, 7957, 6884,
    7488, 1510, 2948, 1543, 4484, 6046, 6077, 2160, 9401, 8253, 1715, 6411,
    8021, 3569, 5807, 9045, 4178, 4613, 9086, 4958, 4282, 7663, 7243, 1668,
    7309, 8980, 6074, 4192, 758, 3028, 7461, 6677, 9954, 3146, 5712, 6873, 8051,
    6994, 4634, 3303, 8227, 3962, 3357, 9130, 7923, 6711, 283, 4610, 1689, 4481,
    2442, 4796, 900, 3854, 3045, 6263, 4412, 566, 250, 5477, 3721, 8100, 3324,
    6132, 2196, 6634, 389, 6273, 412, 4834, 7259, 8910, 9290,
  ];

  keysTest7.forEach((key) => {
    avlTreeTest7.insert(key);
  });

  test('after insertions (only)', () => {
    expect(avlTreeTest1.getRoot()).toMatchInlineSnapshot(`
Node {
  "height": 3,
  "key": 9,
  "left": Node {
    "height": 1,
    "key": 3,
    "left": Node {
      "height": null,
      "key": 1,
      "left": null,
      "right": null,
    },
    "right": null,
  },
  "right": Node {
    "height": 2,
    "key": 16,
    "left": Node {
      "height": null,
      "key": 13,
      "left": null,
      "right": null,
    },
    "right": Node {
      "height": 1,
      "key": 19,
      "left": null,
      "right": Node {
        "height": null,
        "key": 20,
        "left": null,
        "right": null,
      },
    },
  },
}
`);
    expect(avlTreeTest2.getRoot()).toMatchInlineSnapshot(`
Node {
  "height": 3,
  "key": 24,
  "left": Node {
    "height": 2,
    "key": 13,
    "left": Node {
      "height": 1,
      "key": 10,
      "left": Node {
        "height": 0,
        "key": 4,
        "left": null,
        "right": null,
      },
      "right": Node {
        "height": 0,
        "key": 12,
        "left": null,
        "right": null,
      },
    },
    "right": Node {
      "height": 1,
      "key": 23,
      "left": Node {
        "height": null,
        "key": 22,
        "left": null,
        "right": null,
      },
      "right": null,
    },
  },
  "right": Node {
    "height": 2,
    "key": 40,
    "left": Node {
      "height": 1,
      "key": 30,
      "left": Node {
        "height": 0,
        "key": 28,
        "left": null,
        "right": null,
      },
      "right": Node {
        "height": null,
        "key": 32,
        "left": null,
        "right": null,
      },
    },
    "right": Node {
      "height": 1,
      "key": 45,
      "left": Node {
        "height": null,
        "key": 42,
        "left": null,
        "right": null,
      },
      "right": Node {
        "height": null,
        "key": 46,
        "left": null,
        "right": null,
      },
    },
  },
}
`);
    expect(avlTreeTest3.getRoot()).toMatchInlineSnapshot(`
Node {
  "height": 4,
  "key": 6,
  "left": Node {
    "height": 2,
    "key": 3,
    "left": Node {
      "height": 1,
      "key": 1,
      "left": Node {
        "height": 0,
        "key": 0,
        "left": null,
        "right": null,
      },
      "right": Node {
        "height": null,
        "key": 2,
        "left": null,
        "right": null,
      },
    },
    "right": Node {
      "height": 1,
      "key": 4,
      "left": null,
      "right": Node {
        "height": 0,
        "key": 5,
        "left": null,
        "right": null,
      },
    },
  },
  "right": Node {
    "height": 3,
    "key": 14,
    "left": Node {
      "height": 2,
      "key": 10,
      "left": Node {
        "height": 1,
        "key": 8,
        "left": Node {
          "height": 0,
          "key": 7,
          "left": null,
          "right": null,
        },
        "right": Node {
          "height": null,
          "key": 9,
          "left": null,
          "right": null,
        },
      },
      "right": Node {
        "height": 1,
        "key": 11,
        "left": null,
        "right": Node {
          "height": null,
          "key": 12,
          "left": null,
          "right": null,
        },
      },
    },
    "right": Node {
      "height": 2,
      "key": 17,
      "left": Node {
        "height": null,
        "key": 16,
        "left": null,
        "right": null,
      },
      "right": Node {
        "height": 1,
        "key": 19,
        "left": Node {
          "height": 0,
          "key": 18,
          "left": null,
          "right": null,
        },
        "right": Node {
          "height": null,
          "key": 20,
          "left": null,
          "right": null,
        },
      },
    },
  },
}
`);
    expect(avlTreeTest4.getRoot()).toMatchInlineSnapshot(`
Node {
  "height": 4,
  "key": 484,
  "left": Node {
    "height": 3,
    "key": 279,
    "left": Node {
      "height": 2,
      "key": 244,
      "left": Node {
        "height": 1,
        "key": 155,
        "left": Node {
          "height": null,
          "key": 34,
          "left": null,
          "right": null,
        },
        "right": null,
      },
      "right": Node {
        "height": 0,
        "key": 264,
        "left": null,
        "right": null,
      },
    },
    "right": Node {
      "height": 2,
      "key": 394,
      "left": Node {
        "height": 1,
        "key": 307,
        "left": Node {
          "height": 0,
          "key": 282,
          "left": null,
          "right": null,
        },
        "right": Node {
          "height": 0,
          "key": 389,
          "left": null,
          "right": null,
        },
      },
      "right": Node {
        "height": 0,
        "key": 465,
        "left": null,
        "right": null,
      },
    },
  },
  "right": Node {
    "height": 3,
    "key": 644,
    "left": Node {
      "height": 2,
      "key": 571,
      "left": Node {
        "height": 1,
        "key": 490,
        "left": null,
        "right": Node {
          "height": null,
          "key": 567,
          "left": null,
          "right": null,
        },
      },
      "right": Node {
        "height": 1,
        "key": 598,
        "left": Node {
          "height": null,
          "key": 590,
          "left": null,
          "right": null,
        },
        "right": null,
      },
    },
    "right": Node {
      "height": 2,
      "key": 772,
      "left": Node {
        "height": null,
        "key": 646,
        "left": null,
        "right": null,
      },
      "right": Node {
        "height": 1,
        "key": 967,
        "left": Node {
          "height": 0,
          "key": 892,
          "left": null,
          "right": null,
        },
        "right": Node {
          "height": null,
          "key": 987,
          "left": null,
          "right": null,
        },
      },
    },
  },
}
`);
    expect(avlTreeTest5.getRoot()).toMatchInlineSnapshot(`
Node {
  "height": 4,
  "key": 59,
  "left": Node {
    "height": 3,
    "key": 25,
    "left": Node {
      "height": 1,
      "key": 5,
      "left": Node {
        "height": 0,
        "key": 4,
        "left": null,
        "right": null,
      },
      "right": Node {
        "height": 0,
        "key": 19,
        "left": null,
        "right": null,
      },
    },
    "right": Node {
      "height": 2,
      "key": 38,
      "left": Node {
        "height": 1,
        "key": 36,
        "left": Node {
          "height": null,
          "key": 34,
          "left": null,
          "right": null,
        },
        "right": null,
      },
      "right": Node {
        "height": 1,
        "key": 49,
        "left": Node {
          "height": null,
          "key": 42,
          "left": null,
          "right": null,
        },
        "right": Node {
          "height": 0,
          "key": 55,
          "left": null,
          "right": null,
        },
      },
    },
  },
  "right": Node {
    "height": 3,
    "key": 77,
    "left": Node {
      "height": 1,
      "key": 72,
      "left": Node {
        "height": null,
        "key": 64,
        "left": null,
        "right": null,
      },
      "right": null,
    },
    "right": Node {
      "height": 2,
      "key": 97,
      "left": Node {
        "height": 1,
        "key": 78,
        "left": null,
        "right": Node {
          "height": null,
          "key": 79,
          "left": null,
          "right": null,
        },
      },
      "right": Node {
        "height": 1,
        "key": 99,
        "left": Node {
          "height": null,
          "key": 98,
          "left": null,
          "right": null,
        },
        "right": null,
      },
    },
  },
}
`);
    expect(avlTreeTest6.getRoot()).toMatchInlineSnapshot(`
Node {
  "height": 7,
  "key": 4731,
  "left": Node {
    "height": 5,
    "key": 1454,
    "left": Node {
      "height": 4,
      "key": 634,
      "left": Node {
        "height": 3,
        "key": 348,
        "left": Node {
          "height": 2,
          "key": 250,
          "left": Node {
            "height": 1,
            "key": 208,
            "left": Node {
              "height": null,
              "key": 32,
              "left": null,
              "right": null,
            },
            "right": null,
          },
          "right": Node {
            "height": null,
            "key": 295,
            "left": null,
            "right": null,
          },
        },
        "right": Node {
          "height": 2,
          "key": 469,
          "left": Node {
            "height": 0,
            "key": 418,
            "left": null,
            "right": null,
          },
          "right": Node {
            "height": 1,
            "key": 578,
            "left": null,
            "right": Node {
              "height": null,
              "key": 633,
              "left": null,
              "right": null,
            },
          },
        },
      },
      "right": Node {
        "height": 2,
        "key": 1030,
        "left": Node {
          "height": 1,
          "key": 749,
          "left": Node {
            "height": 0,
            "key": 724,
            "left": null,
            "right": null,
          },
          "right": Node {
            "height": null,
            "key": 1008,
            "left": null,
            "right": null,
          },
        },
        "right": Node {
          "height": 1,
          "key": 1108,
          "left": null,
          "right": Node {
            "height": null,
            "key": 1114,
            "left": null,
            "right": null,
          },
        },
      },
    },
    "right": Node {
      "height": 4,
      "key": 3021,
      "left": Node {
        "height": 2,
        "key": 1995,
        "left": Node {
          "height": 1,
          "key": 1709,
          "left": Node {
            "height": 0,
            "key": 1463,
            "left": null,
            "right": null,
          },
          "right": Node {
            "height": null,
            "key": 1728,
            "left": null,
            "right": null,
          },
        },
        "right": Node {
          "height": 1,
          "key": 2346,
          "left": Node {
            "height": null,
            "key": 2171,
            "left": null,
            "right": null,
          },
          "right": Node {
            "height": 0,
            "key": 2576,
            "left": null,
            "right": null,
          },
        },
      },
      "right": Node {
        "height": 3,
        "key": 3847,
        "left": Node {
          "height": 2,
          "key": 3549,
          "left": Node {
            "height": 1,
            "key": 3359,
            "left": Node {
              "height": null,
              "key": 3277,
              "left": null,
              "right": null,
            },
            "right": null,
          },
          "right": Node {
            "height": null,
            "key": 3717,
            "left": null,
            "right": null,
          },
        },
        "right": Node {
          "height": 2,
          "key": 4373,
          "left": Node {
            "height": 1,
            "key": 4018,
            "left": null,
            "right": Node {
              "height": null,
              "key": 4189,
              "left": null,
              "right": null,
            },
          },
          "right": Node {
            "height": 1,
            "key": 4530,
            "left": Node {
              "height": 0,
              "key": 4478,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": 0,
              "key": 4583,
              "left": null,
              "right": null,
            },
          },
        },
      },
    },
  },
  "right": Node {
    "height": 6,
    "key": 7035,
    "left": Node {
      "height": 4,
      "key": 6013,
      "left": Node {
        "height": 3,
        "key": 5580,
        "left": Node {
          "height": 2,
          "key": 5375,
          "left": Node {
            "height": 1,
            "key": 4947,
            "left": Node {
              "height": 0,
              "key": 4850,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": 0,
              "key": 5078,
              "left": null,
              "right": null,
            },
          },
          "right": Node {
            "height": 1,
            "key": 5434,
            "left": Node {
              "height": null,
              "key": 5376,
              "left": null,
              "right": null,
            },
            "right": null,
          },
        },
        "right": Node {
          "height": 2,
          "key": 5804,
          "left": Node {
            "height": 0,
            "key": 5589,
            "left": null,
            "right": null,
          },
          "right": Node {
            "height": 1,
            "key": 5808,
            "left": null,
            "right": Node {
              "height": null,
              "key": 5912,
              "left": null,
              "right": null,
            },
          },
        },
      },
      "right": Node {
        "height": 3,
        "key": 6748,
        "left": Node {
          "height": 2,
          "key": 6472,
          "left": Node {
            "height": 1,
            "key": 6263,
            "left": Node {
              "height": 0,
              "key": 6033,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": 0,
              "key": 6425,
              "left": null,
              "right": null,
            },
          },
          "right": Node {
            "height": 1,
            "key": 6573,
            "left": Node {
              "height": null,
              "key": 6523,
              "left": null,
              "right": null,
            },
            "right": null,
          },
        },
        "right": Node {
          "height": 1,
          "key": 6763,
          "left": null,
          "right": Node {
            "height": null,
            "key": 6823,
            "left": null,
            "right": null,
          },
        },
      },
    },
    "right": Node {
      "height": 5,
      "key": 7931,
      "left": Node {
        "height": 3,
        "key": 7715,
        "left": Node {
          "height": 2,
          "key": 7316,
          "left": Node {
            "height": 1,
            "key": 7191,
            "left": Node {
              "height": 0,
              "key": 7133,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": null,
              "key": 7272,
              "left": null,
              "right": null,
            },
          },
          "right": Node {
            "height": 1,
            "key": 7514,
            "left": Node {
              "height": null,
              "key": 7463,
              "left": null,
              "right": null,
            },
            "right": null,
          },
        },
        "right": Node {
          "height": 2,
          "key": 7873,
          "left": Node {
            "height": null,
            "key": 7730,
            "left": null,
            "right": null,
          },
          "right": Node {
            "height": 1,
            "key": 7904,
            "left": null,
            "right": Node {
              "height": null,
              "key": 7930,
              "left": null,
              "right": null,
            },
          },
        },
      },
      "right": Node {
        "height": 4,
        "key": 8771,
        "left": Node {
          "height": 2,
          "key": 8210,
          "left": Node {
            "height": 1,
            "key": 8140,
            "left": Node {
              "height": null,
              "key": 7984,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": 0,
              "key": 8193,
              "left": null,
              "right": null,
            },
          },
          "right": Node {
            "height": 1,
            "key": 8253,
            "left": Node {
              "height": null,
              "key": 8224,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": null,
              "key": 8343,
              "left": null,
              "right": null,
            },
          },
        },
        "right": Node {
          "height": 3,
          "key": 9539,
          "left": Node {
            "height": 2,
            "key": 9105,
            "left": Node {
              "height": 1,
              "key": 8921,
              "left": Node {
                "height": null,
                "key": 8774,
                "left": null,
                "right": null,
              },
              "right": null,
            },
            "right": Node {
              "height": 1,
              "key": 9170,
              "left": Node {
                "height": 0,
                "key": 9147,
                "left": null,
                "right": null,
              },
              "right": Node {
                "height": 0,
                "key": 9378,
                "left": null,
                "right": null,
              },
            },
          },
          "right": Node {
            "height": 1,
            "key": 9602,
            "left": null,
            "right": Node {
              "height": null,
              "key": 9859,
              "left": null,
              "right": null,
            },
          },
        },
      },
    },
  },
}
`);
    expect(avlTreeTest7.getRoot()).toMatchInlineSnapshot(`
Node {
  "height": 7,
  "key": 6177,
  "left": Node {
    "height": 6,
    "key": 4210,
    "left": Node {
      "height": 5,
      "key": 1838,
      "left": Node {
        "height": 4,
        "key": 1067,
        "left": Node {
          "height": 3,
          "key": 457,
          "left": Node {
            "height": 2,
            "key": 382,
            "left": Node {
              "height": 1,
              "key": 250,
              "left": Node {
                "height": 0,
                "key": 59,
                "left": null,
                "right": null,
              },
              "right": Node {
                "height": 0,
                "key": 283,
                "left": null,
                "right": null,
              },
            },
            "right": Node {
              "height": 1,
              "key": 389,
              "left": null,
              "right": Node {
                "height": null,
                "key": 412,
                "left": null,
                "right": null,
              },
            },
          },
          "right": Node {
            "height": 2,
            "key": 758,
            "left": Node {
              "height": null,
              "key": 566,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": 1,
              "key": 840,
              "left": null,
              "right": Node {
                "height": null,
                "key": 900,
                "left": null,
                "right": null,
              },
            },
          },
        },
        "right": Node {
          "height": 3,
          "key": 1543,
          "left": Node {
            "height": 1,
            "key": 1510,
            "left": Node {
              "height": 0,
              "key": 1275,
              "left": null,
              "right": null,
            },
            "right": null,
          },
          "right": Node {
            "height": 2,
            "key": 1716,
            "left": Node {
              "height": 1,
              "key": 1689,
              "left": Node {
                "height": 0,
                "key": 1668,
                "left": null,
                "right": null,
              },
              "right": Node {
                "height": 0,
                "key": 1715,
                "left": null,
                "right": null,
              },
            },
            "right": Node {
              "height": 0,
              "key": 1728,
              "left": null,
              "right": null,
            },
          },
        },
      },
      "right": Node {
        "height": 4,
        "key": 3146,
        "left": Node {
          "height": 3,
          "key": 2578,
          "left": Node {
            "height": 2,
            "key": 2249,
            "left": Node {
              "height": 1,
              "key": 2160,
              "left": Node {
                "height": 0,
                "key": 1901,
                "left": null,
                "right": null,
              },
              "right": Node {
                "height": null,
                "key": 2196,
                "left": null,
                "right": null,
              },
            },
            "right": Node {
              "height": 1,
              "key": 2254,
              "left": null,
              "right": Node {
                "height": null,
                "key": 2442,
                "left": null,
                "right": null,
              },
            },
          },
          "right": Node {
            "height": 2,
            "key": 2965,
            "left": Node {
              "height": 1,
              "key": 2909,
              "left": Node {
                "height": 0,
                "key": 2707,
                "left": null,
                "right": null,
              },
              "right": Node {
                "height": null,
                "key": 2948,
                "left": null,
                "right": null,
              },
            },
            "right": Node {
              "height": 1,
              "key": 3028,
              "left": null,
              "right": Node {
                "height": null,
                "key": 3045,
                "left": null,
                "right": null,
              },
            },
          },
        },
        "right": Node {
          "height": 3,
          "key": 4178,
          "left": Node {
            "height": 2,
            "key": 3569,
            "left": Node {
              "height": 1,
              "key": 3324,
              "left": Node {
                "height": 0,
                "key": 3303,
                "left": null,
                "right": null,
              },
              "right": Node {
                "height": 0,
                "key": 3357,
                "left": null,
                "right": null,
              },
            },
            "right": Node {
              "height": 1,
              "key": 3854,
              "left": Node {
                "height": null,
                "key": 3721,
                "left": null,
                "right": null,
              },
              "right": Node {
                "height": 0,
                "key": 3962,
                "left": null,
                "right": null,
              },
            },
          },
          "right": Node {
            "height": 1,
            "key": 4180,
            "left": null,
            "right": Node {
              "height": null,
              "key": 4192,
              "left": null,
              "right": null,
            },
          },
        },
      },
    },
    "right": Node {
      "height": 5,
      "key": 5363,
      "left": Node {
        "height": 4,
        "key": 4644,
        "left": Node {
          "height": 3,
          "key": 4592,
          "left": Node {
            "height": 2,
            "key": 4481,
            "left": Node {
              "height": 1,
              "key": 4282,
              "left": null,
              "right": Node {
                "height": null,
                "key": 4412,
                "left": null,
                "right": null,
              },
            },
            "right": Node {
              "height": 0,
              "key": 4484,
              "left": null,
              "right": null,
            },
          },
          "right": Node {
            "height": 1,
            "key": 4613,
            "left": Node {
              "height": null,
              "key": 4610,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": null,
              "key": 4634,
              "left": null,
              "right": null,
            },
          },
        },
        "right": Node {
          "height": 2,
          "key": 4871,
          "left": Node {
            "height": 1,
            "key": 4828,
            "left": Node {
              "height": null,
              "key": 4796,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": null,
              "key": 4834,
              "left": null,
              "right": null,
            },
          },
          "right": Node {
            "height": null,
            "key": 4958,
            "left": null,
            "right": null,
          },
        },
      },
      "right": Node {
        "height": 3,
        "key": 6046,
        "left": Node {
          "height": 2,
          "key": 5737,
          "left": Node {
            "height": 1,
            "key": 5577,
            "left": Node {
              "height": null,
              "key": 5477,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": null,
              "key": 5712,
              "left": null,
              "right": null,
            },
          },
          "right": Node {
            "height": null,
            "key": 5807,
            "left": null,
            "right": null,
          },
        },
        "right": Node {
          "height": 2,
          "key": 6077,
          "left": Node {
            "height": null,
            "key": 6074,
            "left": null,
            "right": null,
          },
          "right": Node {
            "height": 1,
            "key": 6079,
            "left": null,
            "right": Node {
              "height": null,
              "key": 6132,
              "left": null,
              "right": null,
            },
          },
        },
      },
    },
  },
  "right": Node {
    "height": 6,
    "key": 8580,
    "left": Node {
      "height": 5,
      "key": 7041,
      "left": Node {
        "height": 4,
        "key": 6677,
        "left": Node {
          "height": 3,
          "key": 6516,
          "left": Node {
            "height": 2,
            "key": 6226,
            "left": Node {
              "height": 0,
              "key": 6222,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": 1,
              "key": 6273,
              "left": Node {
                "height": 0,
                "key": 6263,
                "left": null,
                "right": null,
              },
              "right": Node {
                "height": 0,
                "key": 6411,
                "left": null,
                "right": null,
              },
            },
          },
          "right": Node {
            "height": 1,
            "key": 6634,
            "left": Node {
              "height": 0,
              "key": 6627,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": 0,
              "key": 6671,
              "left": null,
              "right": null,
            },
          },
        },
        "right": Node {
          "height": 2,
          "key": 6884,
          "left": Node {
            "height": 1,
            "key": 6873,
            "left": Node {
              "height": null,
              "key": 6711,
              "left": null,
              "right": null,
            },
            "right": null,
          },
          "right": Node {
            "height": 1,
            "key": 7004,
            "left": Node {
              "height": null,
              "key": 6994,
              "left": null,
              "right": null,
            },
            "right": null,
          },
        },
      },
      "right": Node {
        "height": 4,
        "key": 7686,
        "left": Node {
          "height": 2,
          "key": 7309,
          "left": Node {
            "height": 1,
            "key": 7243,
            "left": Node {
              "height": 0,
              "key": 7204,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": null,
              "key": 7259,
              "left": null,
              "right": null,
            },
          },
          "right": Node {
            "height": 1,
            "key": 7488,
            "left": Node {
              "height": null,
              "key": 7461,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": null,
              "key": 7663,
              "left": null,
              "right": null,
            },
          },
        },
        "right": Node {
          "height": 3,
          "key": 8051,
          "left": Node {
            "height": 2,
            "key": 7996,
            "left": Node {
              "height": 1,
              "key": 7957,
              "left": Node {
                "height": null,
                "key": 7923,
                "left": null,
                "right": null,
              },
              "right": null,
            },
            "right": Node {
              "height": 0,
              "key": 8021,
              "left": null,
              "right": null,
            },
          },
          "right": Node {
            "height": 1,
            "key": 8227,
            "left": Node {
              "height": null,
              "key": 8100,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": 0,
              "key": 8253,
              "left": null,
              "right": null,
            },
          },
        },
      },
    },
    "right": Node {
      "height": 4,
      "key": 9296,
      "left": Node {
        "height": 3,
        "key": 9205,
        "left": Node {
          "height": 2,
          "key": 8994,
          "left": Node {
            "height": 1,
            "key": 8910,
            "left": Node {
              "height": 0,
              "key": 8868,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": 0,
              "key": 8980,
              "left": null,
              "right": null,
            },
          },
          "right": Node {
            "height": 1,
            "key": 9086,
            "left": Node {
              "height": 0,
              "key": 9045,
              "left": null,
              "right": null,
            },
            "right": Node {
              "height": null,
              "key": 9130,
              "left": null,
              "right": null,
            },
          },
        },
        "right": Node {
          "height": 1,
          "key": 9218,
          "left": Node {
            "height": 0,
            "key": 9210,
            "left": null,
            "right": null,
          },
          "right": Node {
            "height": null,
            "key": 9290,
            "left": null,
            "right": null,
          },
        },
      },
      "right": Node {
        "height": 2,
        "key": 9467,
        "left": Node {
          "height": 1,
          "key": 9337,
          "left": Node {
            "height": 0,
            "key": 9308,
            "left": null,
            "right": null,
          },
          "right": Node {
            "height": null,
            "key": 9401,
            "left": null,
            "right": null,
          },
        },
        "right": Node {
          "height": 1,
          "key": 9950,
          "left": null,
          "right": Node {
            "height": null,
            "key": 9954,
            "left": null,
            "right": null,
          },
        },
      },
    },
  },
}
`);
  });

  test('after some deletion', () => {
    avlTreeTest1.delete(3);
    avlTreeTest1.delete(16);
    avlTreeTest1.delete(20);

    expect(avlTreeTest1.getRoot()).toMatchInlineSnapshot(`
Node {
  "height": 2,
  "key": 9,
  "left": Node {
    "height": 0,
    "key": 1,
    "left": null,
    "right": null,
  },
  "right": Node {
    "height": 1,
    "key": 19,
    "left": Node {
      "height": null,
      "key": 13,
      "left": null,
      "right": null,
    },
    "right": null,
  },
}
`);

    [45, 4, 28, 30, 13].forEach((key) => {
      avlTreeTest2.delete(key);
    });

    expect(avlTreeTest2.getRoot()).toMatchInlineSnapshot(`
Node {
  "height": 3,
  "key": 24,
  "left": Node {
    "height": 2,
    "key": 22,
    "left": Node {
      "height": 1,
      "key": 10,
      "left": null,
      "right": Node {
        "height": 0,
        "key": 12,
        "left": null,
        "right": null,
      },
    },
    "right": Node {
      "height": 0,
      "key": 23,
      "left": null,
      "right": null,
    },
  },
  "right": Node {
    "height": 2,
    "key": 40,
    "left": Node {
      "height": 0,
      "key": 32,
      "left": null,
      "right": null,
    },
    "right": Node {
      "height": 1,
      "key": 46,
      "left": Node {
        "height": null,
        "key": 42,
        "left": null,
        "right": null,
      },
      "right": null,
    },
  },
}
`);

    keysTest3
      .filter((key) => key % 2)
      .forEach((key) => {
        avlTreeTest3.delete(key);
      });

    expect(avlTreeTest3).toMatchInlineSnapshot(`
AVLTree {
  "root": Node {
    "height": 3,
    "key": 14,
    "left": Node {
      "height": 2,
      "key": 6,
      "left": Node {
        "height": 1,
        "key": 2,
        "left": Node {
          "height": 0,
          "key": 0,
          "left": null,
          "right": null,
        },
        "right": Node {
          "height": 0,
          "key": 4,
          "left": null,
          "right": null,
        },
      },
      "right": Node {
        "height": 1,
        "key": 10,
        "left": Node {
          "height": 0,
          "key": 8,
          "left": null,
          "right": null,
        },
        "right": Node {
          "height": 0,
          "key": 12,
          "left": null,
          "right": null,
        },
      },
    },
    "right": Node {
      "height": 1,
      "key": 18,
      "left": Node {
        "height": null,
        "key": 16,
        "left": null,
        "right": null,
      },
      "right": Node {
        "height": 0,
        "key": 20,
        "left": null,
        "right": null,
      },
    },
  },
}
`);

    keysTest4
      .filter((key) => key % 4)
      .forEach((key) => {
        avlTreeTest4.delete(key);
      });

    expect(avlTreeTest4).toMatchInlineSnapshot(`
AVLTree {
  "root": Node {
    "height": 2,
    "key": 484,
    "left": Node {
      "height": 1,
      "key": 264,
      "left": Node {
        "height": 0,
        "key": 244,
        "left": null,
        "right": null,
      },
      "right": null,
    },
    "right": Node {
      "height": 1,
      "key": 772,
      "left": Node {
        "height": 0,
        "key": 644,
        "left": null,
        "right": null,
      },
      "right": Node {
        "height": 0,
        "key": 892,
        "left": null,
        "right": null,
      },
    },
  },
}
`);

    keysTest5
      .filter((key) => key % 5)
      .forEach((key) => {
        avlTreeTest5.delete(key);
      });

    expect(avlTreeTest5).toMatchInlineSnapshot(`
AVLTree {
  "root": Node {
    "height": 1,
    "key": 25,
    "left": Node {
      "height": 0,
      "key": 5,
      "left": null,
      "right": null,
    },
    "right": Node {
      "height": 0,
      "key": 55,
      "left": null,
      "right": null,
    },
  },
}
`);
  });
});
