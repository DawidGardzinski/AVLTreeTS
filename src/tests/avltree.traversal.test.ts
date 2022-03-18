import { AVLTree } from '../dataStructures/AVLTree/AVLTree';
describe('AVLTree - traversal', () => {
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

  test('preorder', () => {
    let preorderTraversal;

    preorderTraversal = avlTreeTest1.preOrder();
    expect(preorderTraversal).toEqual([9, 3, 1, 16, 13, 19, 20]);

    preorderTraversal = avlTreeTest2.preOrder();
    expect(preorderTraversal).toEqual([
      24, 13, 10, 4, 12, 23, 22, 40, 30, 28, 32, 45, 42, 46,
    ]);

    preorderTraversal = avlTreeTest3.preOrder();
    expect(preorderTraversal).toEqual([
      6, 3, 1, 0, 2, 4, 5, 14, 10, 8, 7, 9, 11, 12, 17, 16, 19, 18, 20,
    ]);

    preorderTraversal = avlTreeTest4.preOrder();
    expect(preorderTraversal).toEqual([
      484, 279, 244, 155, 34, 264, 394, 307, 282, 389, 465, 644, 571, 490, 567,
      598, 590, 772, 646, 967, 892, 987,
    ]);

    preorderTraversal = avlTreeTest5.preOrder();
    expect(preorderTraversal).toEqual([
      59, 25, 5, 4, 19, 38, 36, 34, 49, 42, 55, 77, 72, 64, 97, 78, 79, 99, 98,
    ]);

    preorderTraversal = avlTreeTest6.preOrder();
    expect(preorderTraversal).toEqual([
      4731, 1454, 634, 348, 250, 208, 32, 295, 469, 418, 578, 633, 1030, 749,
      724, 1008, 1108, 1114, 3021, 1995, 1709, 1463, 1728, 2346, 2171, 2576,
      3847, 3549, 3359, 3277, 3717, 4373, 4018, 4189, 4530, 4478, 4583, 7035,
      6013, 5580, 5375, 4947, 4850, 5078, 5434, 5376, 5804, 5589, 5808, 5912,
      6748, 6472, 6263, 6033, 6425, 6573, 6523, 6763, 6823, 7931, 7715, 7316,
      7191, 7133, 7272, 7514, 7463, 7873, 7730, 7904, 7930, 8771, 8210, 8140,
      7984, 8193, 8253, 8224, 8343, 9539, 9105, 8921, 8774, 9170, 9147, 9378,
      9602, 9859,
    ]);

    preorderTraversal = avlTreeTest7.preOrder();
    expect(preorderTraversal).toEqual([
      6177, 4210, 1838, 1067, 457, 382, 250, 59, 283, 389, 412, 758, 566, 840,
      900, 1543, 1510, 1275, 1716, 1689, 1668, 1715, 1728, 3146, 2578, 2249,
      2160, 1901, 2196, 2254, 2442, 2965, 2909, 2707, 2948, 3028, 3045, 4178,
      3569, 3324, 3303, 3357, 3854, 3721, 3962, 4180, 4192, 5363, 4644, 4592,
      4481, 4282, 4412, 4484, 4613, 4610, 4634, 4871, 4828, 4796, 4834, 4958,
      6046, 5737, 5577, 5477, 5712, 5807, 6077, 6074, 6079, 6132, 8580, 7041,
      6677, 6516, 6226, 6222, 6273, 6263, 6411, 6634, 6627, 6671, 6884, 6873,
      6711, 7004, 6994, 7686, 7309, 7243, 7204, 7259, 7488, 7461, 7663, 8051,
      7996, 7957, 7923, 8021, 8227, 8100, 8253, 9296, 9205, 8994, 8910, 8868,
      8980, 9086, 9045, 9130, 9218, 9210, 9290, 9467, 9337, 9308, 9401, 9950,
      9954,
    ]);
  });
  test('inorder', () => {
    let inorderTraversal;

    inorderTraversal = avlTreeTest1.inOrder();
    expect(inorderTraversal).toEqual([1, 3, 9, 13, 16, 19, 20]);

    inorderTraversal = avlTreeTest2.inOrder();
    expect(inorderTraversal).toEqual([
      4, 10, 12, 13, 22, 23, 24, 28, 30, 32, 40, 42, 45, 46,
    ]);

    inorderTraversal = avlTreeTest3.inOrder();
    expect(inorderTraversal).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 17, 18, 19, 20,
    ]);

    inorderTraversal = avlTreeTest4.inOrder();
    expect(inorderTraversal).toEqual([
      34, 155, 244, 264, 279, 282, 307, 389, 394, 465, 484, 490, 567, 571, 590,
      598, 644, 646, 772, 892, 967, 987,
    ]);

    inorderTraversal = avlTreeTest5.inOrder();
    expect(inorderTraversal).toEqual([
      4, 5, 19, 25, 34, 36, 38, 42, 49, 55, 59, 64, 72, 77, 78, 79, 97, 98, 99,
    ]);

    inorderTraversal = avlTreeTest6.inOrder();
    expect(inorderTraversal).toEqual([
      32, 208, 250, 295, 348, 418, 469, 578, 633, 634, 724, 749, 1008, 1030,
      1108, 1114, 1454, 1463, 1709, 1728, 1995, 2171, 2346, 2576, 3021, 3277,
      3359, 3549, 3717, 3847, 4018, 4189, 4373, 4478, 4530, 4583, 4731, 4850,
      4947, 5078, 5375, 5376, 5434, 5580, 5589, 5804, 5808, 5912, 6013, 6033,
      6263, 6425, 6472, 6523, 6573, 6748, 6763, 6823, 7035, 7133, 7191, 7272,
      7316, 7463, 7514, 7715, 7730, 7873, 7904, 7930, 7931, 7984, 8140, 8193,
      8210, 8224, 8253, 8343, 8771, 8774, 8921, 9105, 9147, 9170, 9378, 9539,
      9602, 9859,
    ]);

    inorderTraversal = avlTreeTest7.inOrder();
    expect(inorderTraversal).toEqual([
      59, 250, 283, 382, 389, 412, 457, 566, 758, 840, 900, 1067, 1275, 1510,
      1543, 1668, 1689, 1715, 1716, 1728, 1838, 1901, 2160, 2196, 2249, 2254,
      2442, 2578, 2707, 2909, 2948, 2965, 3028, 3045, 3146, 3303, 3324, 3357,
      3569, 3721, 3854, 3962, 4178, 4180, 4192, 4210, 4282, 4412, 4481, 4484,
      4592, 4610, 4613, 4634, 4644, 4796, 4828, 4834, 4871, 4958, 5363, 5477,
      5577, 5712, 5737, 5807, 6046, 6074, 6077, 6079, 6132, 6177, 6222, 6226,
      6263, 6273, 6411, 6516, 6627, 6634, 6671, 6677, 6711, 6873, 6884, 6994,
      7004, 7041, 7204, 7243, 7259, 7309, 7461, 7488, 7663, 7686, 7923, 7957,
      7996, 8021, 8051, 8100, 8227, 8253, 8580, 8868, 8910, 8980, 8994, 9045,
      9086, 9130, 9205, 9210, 9218, 9290, 9296, 9308, 9337, 9401, 9467, 9950,
      9954,
    ]);
  });

  test('postorder', () => {
    let postorderTraversal;

    postorderTraversal = avlTreeTest1.postOrder();
    expect(postorderTraversal).toEqual([1, 3, 13, 16, 19, 20, 9]);
    postorderTraversal = avlTreeTest2.postOrder();
    expect(postorderTraversal).toEqual([
      4, 10, 12, 13, 22, 23, 28, 30, 32, 40, 42, 45, 46, 24,
    ]);
    postorderTraversal = avlTreeTest3.postOrder();
    expect(postorderTraversal).toEqual([
      0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 16, 17, 18, 19, 20, 6,
    ]);
    postorderTraversal = avlTreeTest4.postOrder();
    expect(postorderTraversal).toEqual([
      34, 155, 244, 264, 279, 282, 307, 389, 394, 465, 490, 567, 571, 590, 598,
      644, 646, 772, 892, 967, 987, 484,
    ]);
    postorderTraversal = avlTreeTest5.postOrder();
    expect(postorderTraversal).toEqual([
      4, 5, 19, 25, 34, 36, 38, 42, 49, 55, 64, 72, 77, 78, 79, 97, 98, 99, 59,
    ]);
    postorderTraversal = avlTreeTest6.postOrder();
    expect(postorderTraversal).toEqual([
      32, 208, 250, 295, 348, 418, 469, 578, 633, 634, 724, 749, 1008, 1030,
      1108, 1114, 1454, 1463, 1709, 1728, 1995, 2171, 2346, 2576, 3021, 3277,
      3359, 3549, 3717, 3847, 4018, 4189, 4373, 4478, 4530, 4583, 4850, 4947,
      5078, 5375, 5376, 5434, 5580, 5589, 5804, 5808, 5912, 6013, 6033, 6263,
      6425, 6472, 6523, 6573, 6748, 6763, 6823, 7035, 7133, 7191, 7272, 7316,
      7463, 7514, 7715, 7730, 7873, 7904, 7930, 7931, 7984, 8140, 8193, 8210,
      8224, 8253, 8343, 8771, 8774, 8921, 9105, 9147, 9170, 9378, 9539, 9602,
      9859, 4731,
    ]);
    postorderTraversal = avlTreeTest7.postOrder();
    expect(postorderTraversal).toEqual([
      59, 250, 283, 382, 389, 412, 457, 566, 758, 840, 900, 1067, 1275, 1510,
      1543, 1668, 1689, 1715, 1716, 1728, 1838, 1901, 2160, 2196, 2249, 2254,
      2442, 2578, 2707, 2909, 2948, 2965, 3028, 3045, 3146, 3303, 3324, 3357,
      3569, 3721, 3854, 3962, 4178, 4180, 4192, 4210, 4282, 4412, 4481, 4484,
      4592, 4610, 4613, 4634, 4644, 4796, 4828, 4834, 4871, 4958, 5363, 5477,
      5577, 5712, 5737, 5807, 6046, 6074, 6077, 6079, 6132, 6222, 6226, 6263,
      6273, 6411, 6516, 6627, 6634, 6671, 6677, 6711, 6873, 6884, 6994, 7004,
      7041, 7204, 7243, 7259, 7309, 7461, 7488, 7663, 7686, 7923, 7957, 7996,
      8021, 8051, 8100, 8227, 8253, 8580, 8868, 8910, 8980, 8994, 9045, 9086,
      9130, 9205, 9210, 9218, 9290, 9296, 9308, 9337, 9401, 9467, 9950, 9954,
      6177,
    ]);
  });

  test('levelOrderTraversal', () => {
    let levelOrderTraversal;

    levelOrderTraversal = avlTreeTest1.levelOrder();
    expect(levelOrderTraversal).toEqual([9, 3, 16, 1, 13, 19, 20]);
    levelOrderTraversal = avlTreeTest2.levelOrder();
    expect(levelOrderTraversal).toEqual([
      24, 13, 40, 10, 23, 30, 45, 4, 12, 22, 28, 32, 42, 46,
    ]);

    levelOrderTraversal = avlTreeTest3.levelOrder();
    expect(levelOrderTraversal).toEqual([
      6, 3, 14, 1, 4, 10, 17, 0, 2, 5, 8, 11, 16, 19, 7, 9, 12, 18, 20,
    ]);

    levelOrderTraversal = avlTreeTest4.levelOrder();
    expect(levelOrderTraversal).toEqual([
      484, 279, 644, 244, 394, 571, 772, 155, 264, 307, 465, 490, 598, 646, 967,
      34, 282, 389, 567, 590, 892, 987,
    ]);

    levelOrderTraversal = avlTreeTest5.levelOrder();
    expect(levelOrderTraversal).toEqual([
      59, 25, 77, 5, 38, 72, 97, 4, 19, 36, 49, 64, 78, 99, 34, 42, 55, 79, 98,
    ]);

    levelOrderTraversal = avlTreeTest6.levelOrder();
    expect(levelOrderTraversal).toEqual([
      4731, 1454, 7035, 634, 3021, 6013, 7931, 348, 1030, 1995, 3847, 5580,
      6748, 7715, 8771, 250, 469, 749, 1108, 1709, 2346, 3549, 4373, 5375, 5804,
      6472, 6763, 7316, 7873, 8210, 9539, 208, 295, 418, 578, 724, 1008, 1114,
      1463, 1728, 2171, 2576, 3359, 3717, 4018, 4530, 4947, 5434, 5589, 5808,
      6263, 6573, 6823, 7191, 7514, 7730, 7904, 8140, 8253, 9105, 9602, 32, 633,
      3277, 4189, 4478, 4583, 4850, 5078, 5376, 5912, 6033, 6425, 6523, 7133,
      7272, 7463, 7930, 7984, 8193, 8224, 8343, 8921, 9170, 9859, 8774, 9147,
      9378,
    ]);

    levelOrderTraversal = avlTreeTest7.levelOrder();
    expect(levelOrderTraversal).toEqual([
      6177, 4210, 8580, 1838, 5363, 7041, 9296, 1067, 3146, 4644, 6046, 6677,
      7686, 9205, 9467, 457, 1543, 2578, 4178, 4592, 4871, 5737, 6077, 6516,
      6884, 7309, 8051, 8994, 9218, 9337, 9950, 382, 758, 1510, 1716, 2249,
      2965, 3569, 4180, 4481, 4613, 4828, 4958, 5577, 5807, 6074, 6079, 6226,
      6634, 6873, 7004, 7243, 7488, 7996, 8227, 8910, 9086, 9210, 9290, 9308,
      9401, 9954, 250, 389, 566, 840, 1275, 1689, 1728, 2160, 2254, 2909, 3028,
      3324, 3854, 4192, 4282, 4484, 4610, 4634, 4796, 4834, 5477, 5712, 6132,
      6222, 6273, 6627, 6671, 6711, 6994, 7204, 7259, 7461, 7663, 7957, 8021,
      8100, 8253, 8868, 8980, 9045, 9130, 59, 283, 412, 900, 1668, 1715, 1901,
      2196, 2442, 2707, 2948, 3045, 3303, 3357, 3721, 3962, 4412, 6263, 6411,
      7923,
    ]);
  });

  test('levelOrderTraverslalWithNulls', () => {
    let levelOrderTraverslalWithNulls;

    levelOrderTraverslalWithNulls = avlTreeTest1.levelOrderWithNulls();
    expect(levelOrderTraverslalWithNulls).toEqual([
      9,
      3,
      16,
      1,
      null,
      13,
      19,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      20,
    ]);

    levelOrderTraverslalWithNulls = avlTreeTest2.levelOrderWithNulls();
    expect(levelOrderTraverslalWithNulls).toEqual([
      24,
      13,
      40,
      10,
      23,
      30,
      45,
      4,
      12,
      22,
      null,
      28,
      32,
      42,
      46,
    ]);

    levelOrderTraverslalWithNulls = avlTreeTest3.levelOrderWithNulls();
    expect(levelOrderTraverslalWithNulls).toEqual([
      6,
      3,
      14,
      1,
      4,
      10,
      17,
      0,
      2,
      null,
      5,
      8,
      11,
      16,
      19,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      7,
      9,
      null,
      12,
      null,
      null,
      18,
      20,
    ]);

    levelOrderTraverslalWithNulls = avlTreeTest4.levelOrderWithNulls();
    expect(levelOrderTraverslalWithNulls).toEqual([
      484,
      279,
      644,
      244,
      394,
      571,
      772,
      155,
      264,
      307,
      465,
      490,
      598,
      646,
      967,
      34,
      null,
      null,
      null,
      282,
      389,
      null,
      null,
      null,
      567,
      590,
      null,
      null,
      null,
      892,
      987,
    ]);

    levelOrderTraverslalWithNulls = avlTreeTest5.levelOrderWithNulls();
    expect(levelOrderTraverslalWithNulls).toEqual([
      59,
      25,
      77,
      5,
      38,
      72,
      97,
      4,
      19,
      36,
      49,
      64,
      null,
      78,
      99,
      null,
      null,
      null,
      null,
      34,
      null,
      42,
      55,
      null,
      null,
      null,
      null,
      null,
      79,
      98,
      null,
    ]);

    levelOrderTraverslalWithNulls = avlTreeTest6.levelOrderWithNulls();
    expect(levelOrderTraverslalWithNulls).toEqual([
      4731,
      1454,
      7035,
      634,
      3021,
      6013,
      7931,
      348,
      1030,
      1995,
      3847,
      5580,
      6748,
      7715,
      8771,
      250,
      469,
      749,
      1108,
      1709,
      2346,
      3549,
      4373,
      5375,
      5804,
      6472,
      6763,
      7316,
      7873,
      8210,
      9539,
      208,
      295,
      418,
      578,
      724,
      1008,
      null,
      1114,
      1463,
      1728,
      2171,
      2576,
      3359,
      3717,
      4018,
      4530,
      4947,
      5434,
      5589,
      5808,
      6263,
      6573,
      null,
      6823,
      7191,
      7514,
      7730,
      7904,
      8140,
      8253,
      9105,
      9602,
      32,
      null,
      null,
      null,
      null,
      null,
      null,
      633,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      3277,
      null,
      null,
      null,
      null,
      4189,
      4478,
      4583,
      4850,
      5078,
      5376,
      null,
      null,
      null,
      null,
      5912,
      6033,
      6425,
      6523,
      null,
      null,
      null,
      null,
      null,
      7133,
      7272,
      7463,
      null,
      null,
      null,
      null,
      7930,
      7984,
      8193,
      8224,
      8343,
      8921,
      9170,
      null,
      9859,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      8774,
      null,
      9147,
      9378,
      null,
      null,
      null,
      null,
    ]);

    levelOrderTraverslalWithNulls = avlTreeTest7.levelOrderWithNulls();
    expect(levelOrderTraverslalWithNulls).toEqual([
      6177,
      4210,
      8580,
      1838,
      5363,
      7041,
      9296,
      1067,
      3146,
      4644,
      6046,
      6677,
      7686,
      9205,
      9467,
      457,
      1543,
      2578,
      4178,
      4592,
      4871,
      5737,
      6077,
      6516,
      6884,
      7309,
      8051,
      8994,
      9218,
      9337,
      9950,
      382,
      758,
      1510,
      1716,
      2249,
      2965,
      3569,
      4180,
      4481,
      4613,
      4828,
      4958,
      5577,
      5807,
      6074,
      6079,
      6226,
      6634,
      6873,
      7004,
      7243,
      7488,
      7996,
      8227,
      8910,
      9086,
      9210,
      9290,
      9308,
      9401,
      null,
      9954,
      250,
      389,
      566,
      840,
      1275,
      null,
      1689,
      1728,
      2160,
      2254,
      2909,
      3028,
      3324,
      3854,
      null,
      4192,
      4282,
      4484,
      4610,
      4634,
      4796,
      4834,
      null,
      null,
      5477,
      5712,
      null,
      null,
      null,
      null,
      null,
      6132,
      6222,
      6273,
      6627,
      6671,
      6711,
      null,
      6994,
      null,
      7204,
      7259,
      7461,
      7663,
      7957,
      8021,
      8100,
      8253,
      8868,
      8980,
      9045,
      9130,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      59,
      283,
      null,
      412,
      null,
      null,
      null,
      900,
      null,
      null,
      null,
      null,
      1668,
      1715,
      null,
      null,
      1901,
      2196,
      null,
      2442,
      2707,
      2948,
      null,
      3045,
      3303,
      3357,
      3721,
      3962,
      null,
      null,
      null,
      null,
      null,
      4412,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      6263,
      6411,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      7923,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
  });
});
