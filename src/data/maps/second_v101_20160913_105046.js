// DEBUG BEGIN
try {
// DEBUG END
var MAP_WIDTH = 65;
var MAP_HEIGHT = 33;
var MAP_DATA = "000000000000000000000000000000000000000000000000000000000000000000000331330000000000000000000033313133333000000000333333313333333000003111300333333333333333330311161161130000000003366666166666330000031113001111111161111111303111611611100000000036666666666666300000311130031111111611666663031116116113000000000116666666666611003333111333311111116111111130311161133333133300003666666666666630031111111113333333333333331303111611303111113000036666666666666300111111111110000000000000313031116113011111130000116666616666611003111111111300000000033133133333131330311666333303666666666666630033331113333033331330311161611300000003116111111036666666666666300311111111130311111303111616111033313331161133330116616666616611001111111111101111113031116161130311111311611111103666666666666630031111111113031111130333333333303111113116663333036666666666666300333311133333333111303333333333031111131111130000116666616666611003111111111111131113003111111130311111311111300003666666666666630011111111111111311130031111111103111113331333000036666666666666300311111111111113111300311111113031111130000000000116666616666611003333333333311131113003111333330336663333300000003666666666666630000000000003111311130031111111300311166663000000036666666666666300331331331331113111333311111113003111666630000000116666666666611003111111111111131111113111111130036663666300000003666666166666630031111111111111311111133133313333311136663000000036666666666666300311111111111113111111300000000311111366630000000116616666616611003333333333333333133333000000003133133666300000003666666666666630000000000000000000000000033333331300036663000000036666666666666300000000000000000000000000311111113333366630000000116666666666611000000000000000000000000003133333336666666300000003666666666666630000000000000000000000000031111111166666663000000036666666666666300000000000000000000000000333333311663333330000000116666616666611000000000000000000000000000000003333330000000000003666666666666630000000000000000000000000000000000000000000000000033616616166163300000000000000000000000000000000000000000000000000333133131331333000000000000000000000000000000000000000000000000000000000000000000";
var MAP_OBJECT_NAMES;
	var L2_LO1;
// DEBUG BEGIN
} catch (err) { alert(err); }
// DEBUG END

function mapInit()
{
// DEBUG BEGIN
	try {
// DEBUG END
	_objs.length = 0;
	
	mapLoadFromString(MAP_WIDTH, MAP_HEIGHT, MAP_DATA);
	
	_objs.push(
		new ObjPlayer(6, 3),
		new ObjDoor(56, 1, 0),
		new ObjDoor(63, 16, 0),
		new ObjDoor(55, 31, 0),
		new ObjDoor(63, 25, 0),
		new ObjDoor(49, 4, 1),
		new ObjDoor(49, 7, 1),
		new ObjDoor(49, 10, 1),
		new ObjDoor(49, 13, 1),
		new ObjDoor(49, 19, 1),
		new ObjDoor(49, 22, 1),
		new ObjDoor(49, 28, 1),
		new ObjDoor(49, 16, 1),
		new ObjDoor(49, 25, 1),
		new ObjDoor(63, 4, 1),
		new ObjDoor(63, 7, 1),
		new ObjDoor(63, 10, 1),
		new ObjDoor(63, 13, 1),
		new ObjDoor(63, 19, 1),
		new ObjDoor(63, 22, 1),
		new ObjDoor(63, 28, 1),
		new ObjDoor(41, 15, 2),
		new ObjDoor(41, 5, 0),
		new ObjDoor(38, 7, 1),
		new ObjDoor(47, 9, 1),
		new ObjDoor(47, 11, 3),
		new ObjCube(42, 7, 1),
		new ObjSwitch2(42, 13),
		new ObjPortal(40, 10, 2, 0, 1, 0, 1),
		new ObjSwitch2(43, 10),
		new ObjPortal(42, 10, -2, 0, -2, 0, 1),
		new ObjPortal(35, 16, 0, 2, 0, 1, 1),
		new ObjDoor(35, 10, 2),
		new ObjDoor(35, 23, 0),
		new ObjDoor(34, 8, 0),
		new ObjDoor(34, 1, 0),
		new ObjDoor(32, 8, 0),
		new ObjDoor(32, 1, 0),
		new ObjSwitch(34, 4),
		new ObjSwitch2(31, 5),
		new ObjPortal(31, 3, 6, 0, 2, 0, 0),
		new ObjCube(35, 5),
		new ObjDoor(39, 3, 1),
		new ObjDoor(6, 1, 0),
		new ObjDoor(11, 7, 1),
		new ObjDoor(1, 7, 3),
		new ObjDoor(11, 11, 1),
		new ObjDoor(1, 11, 1),
		new ObjDoor(13, 11, 1),
		new ObjCube(24, 15),
		new ObjSwitch(20, 21),
		new ObjDoor(17, 9, 0),
		new ObjDoor(17, 23, 0),
		new ObjDoor(24, 21, 2),
		new ObjDoor(30, 15, 1),
		new ObjDoor(28, 21, 0),
		new ObjCrystal(24, 19),
		new ObjSwitch2(27, 14),
		new ObjDoor(23, 8, 2),
		new ObjDoor(30, 10, 1),
		new ObjPortal(23, 10, 3, 0, 1, 0, 0),
		new ObjSwitch(28, 10),
		new ObjPortal(20, 4, -2, 0, 6, 2, 1),
		new ObjSwitch(24, 3),
		new ObjSwitch(25, 3),
		new ObjSwitch(26, 3),
		new ObjDoor(11, 3, 1),
		new ObjPotion(56, 2, 2),
		new ObjPotion(56, 16, 0),
		new ObjPotion(56, 28, 2),
		new ObjPotion(34, 16, 0),
		new ObjPotion(36, 16, 0),
		new ObjPotion(35, 19, 2)
	);
	L2_LO1 = new LightsOut(34, 12, 3, 3, 3);

	MAP_OBJECT_NAMES = [ 'PLAYER', 'L4_DOOR1', 'L4_DOOR2', 'L4_DOOR3', 'L4_DOOR4', 'L4_DOOR_X1', 'L4_DOOR_X2', 'L4_DOOR_X3', 'L4_DOOR_X4', 'L4_DOOR_X5', 'L4_DOOR_X6', 'L4_DOOR_X7', 'L4_DOOR_X8', 'L4_DOOR_X9', 'L4_DOOR_Y1', 'L4_DOOR_Y2', 'L4_DOOR_Y3', 'L4_DOOR_Y4', 'L4_DOOR_Y5', 'L4_DOOR_Y6', 'L4_DOOR_Y7', 'L3_DOOR1', 'L3_DOOR2', 'L3_DOOR3', 'L3_DOOR4', 'L3_DOOR5', 'L3_CUBE1', 'L3_SW1', 'L3_PORTAL1', 'L3_SW2', 'L3_PORTAL2', 'L2_PORTAL1', 'L2_DOOR1', 'L2_DOOR2', 'L1_DOOR1', 'L1_DOOR2', 'L1_DOOR3', 'L1_DOOR4', 'L1_SW1', 'L1_SW2', 'L1_PORTAL1', 'L1_CUBE1', 'L1_DOOR5', 'LIMBO_DOOR1', 'LIMBO_DOOR2', 'LIMBO_DOOR3', 'LIMBO_DOOR4', 'LIMBO_DOOR5', 'TUT_DOOR2', 'TUT_CUBE1', 'TUT_SW1', 'TUT_DOOR3', 'TUT_DOOR4', 'TUT_DOOR5', 'TUT_DOOR6', 'TUT_DOOR7', 'TUT_CRYSTAL', 'TUT_SW2', 'TUT_DOOR8', 'TUT_DOOR9', 'TUT_PORTAL1', 'TUT_SW3', 'TUT_PORTAL2', 'TUT_SW4', 'TUT_SW5', 'TUT_SW6', 'TUT_DOOR10', 'L4_POT1', 'L4_POT2', 'L4_POT3', 'L2_POT1', 'L2_POT2', 'L2_POT3'];


// DEBUG BEGIN
} catch (err) { alert(err); }
// DEBUG END
}

function mapUpdate()
{
// DEBUG BEGIN
try {
// DEBUG END
	var PLAYER = _objs[0];
	var L4_DOOR1 = _objs[1];
	var L4_DOOR2 = _objs[2];
	var L4_DOOR3 = _objs[3];
	var L4_DOOR4 = _objs[4];
	var L4_DOOR_X1 = _objs[5];
	var L4_DOOR_X2 = _objs[6];
	var L4_DOOR_X3 = _objs[7];
	var L4_DOOR_X4 = _objs[8];
	var L4_DOOR_X5 = _objs[9];
	var L4_DOOR_X6 = _objs[10];
	var L4_DOOR_X7 = _objs[11];
	var L4_DOOR_X8 = _objs[12];
	var L4_DOOR_X9 = _objs[13];
	var L4_DOOR_Y1 = _objs[14];
	var L4_DOOR_Y2 = _objs[15];
	var L4_DOOR_Y3 = _objs[16];
	var L4_DOOR_Y4 = _objs[17];
	var L4_DOOR_Y5 = _objs[18];
	var L4_DOOR_Y6 = _objs[19];
	var L4_DOOR_Y7 = _objs[20];
	var L3_DOOR1 = _objs[21];
	var L3_DOOR2 = _objs[22];
	var L3_DOOR3 = _objs[23];
	var L3_DOOR4 = _objs[24];
	var L3_DOOR5 = _objs[25];
	var L3_CUBE1 = _objs[26];
	var L3_SW1 = _objs[27];
	var L3_PORTAL1 = _objs[28];
	var L3_SW2 = _objs[29];
	var L3_PORTAL2 = _objs[30];
	var L2_PORTAL1 = _objs[31];
	var L2_DOOR1 = _objs[32];
	var L2_DOOR2 = _objs[33];
	var L1_DOOR1 = _objs[34];
	var L1_DOOR2 = _objs[35];
	var L1_DOOR3 = _objs[36];
	var L1_DOOR4 = _objs[37];
	var L1_SW1 = _objs[38];
	var L1_SW2 = _objs[39];
	var L1_PORTAL1 = _objs[40];
	var L1_CUBE1 = _objs[41];
	var L1_DOOR5 = _objs[42];
	var LIMBO_DOOR1 = _objs[43];
	var LIMBO_DOOR2 = _objs[44];
	var LIMBO_DOOR3 = _objs[45];
	var LIMBO_DOOR4 = _objs[46];
	var LIMBO_DOOR5 = _objs[47];
	var TUT_DOOR2 = _objs[48];
	var TUT_CUBE1 = _objs[49];
	var TUT_SW1 = _objs[50];
	var TUT_DOOR3 = _objs[51];
	var TUT_DOOR4 = _objs[52];
	var TUT_DOOR5 = _objs[53];
	var TUT_DOOR6 = _objs[54];
	var TUT_DOOR7 = _objs[55];
	var TUT_CRYSTAL = _objs[56];
	var TUT_SW2 = _objs[57];
	var TUT_DOOR8 = _objs[58];
	var TUT_DOOR9 = _objs[59];
	var TUT_PORTAL1 = _objs[60];
	var TUT_SW3 = _objs[61];
	var TUT_PORTAL2 = _objs[62];
	var TUT_SW4 = _objs[63];
	var TUT_SW5 = _objs[64];
	var TUT_SW6 = _objs[65];
	var TUT_DOOR10 = _objs[66];
	var L4_POT1 = _objs[67];
	var L4_POT2 = _objs[68];
	var L4_POT3 = _objs[69];
	var L2_POT1 = _objs[70];
	var L2_POT2 = _objs[71];
	var L2_POT3 = _objs[72];
LIMBO_DOOR1.targetDoor = TUT_DOOR2;
LIMBO_DOOR2.targetDoor = TUT_DOOR10;
LIMBO_DOOR3.targetDoor = L1_DOOR1;
LIMBO_DOOR4.targetDoor = L2_DOOR1;
LIMBO_DOOR5.targetDoor = L3_DOOR1;

LIMBO_DOOR2.doorLockId = 1;
LIMBO_DOOR3.doorLockId = 2;
LIMBO_DOOR4.doorLockId = 3;
LIMBO_DOOR5.doorLockId = 4;

///

TUT_DOOR2.targetDoor = LIMBO_DOOR1;
TUT_DOOR3.targetDoor = TUT_DOOR4;
TUT_DOOR4.targetDoor = TUT_DOOR3;
TUT_DOOR6.targetDoor = TUT_DOOR7;
TUT_DOOR7.targetDoor = TUT_DOOR6;
TUT_DOOR8.targetDoor = TUT_DOOR9;
TUT_DOOR9.targetDoor = TUT_DOOR8;
TUT_DOOR10.targetDoor = LIMBO_DOOR2;


if (TUT_SW1.switchStatus)
{
TUT_DOOR4.targetDoor = TUT_DOOR5;
TUT_DOOR5.targetDoor = TUT_DOOR4;
}

if (TUT_SW2.switchStatus)
{
TUT_DOOR6.targetDoor = TUT_DOOR8;
TUT_DOOR8.targetDoor = TUT_DOOR6;
TUT_DOOR7.targetDoor = TUT_DOOR9;
TUT_DOOR9.targetDoor = TUT_DOOR7;
}

TUT_PORTAL1.kill = true;
if (TUT_SW3.switchStatus)
{
TUT_PORTAL1.kill = false;
}

TUT_PORTAL2.kill = true;
if (TUT_SW5.switchStatus)
{
TUT_PORTAL2.kill = false;
}

///

L1_DOOR1.targetDoor = L1_DOOR2;
L1_DOOR2.targetDoor = L1_DOOR1;
L1_DOOR3.targetDoor = L1_DOOR4;
L1_DOOR4.targetDoor = L1_DOOR3;
L1_DOOR5.targetDoor = L2_DOOR1;

if (L1_SW1.switchStatus)
{
L1_DOOR1.targetDoor = L1_DOOR4;
L1_DOOR2.targetDoor = L1_DOOR3;
L1_DOOR3.targetDoor = L1_DOOR2;
L1_DOOR4.targetDoor = L1_DOOR1;
}

L1_PORTAL1.kill = true;
if (L1_SW2.switchStatus)
{
L1_PORTAL1.kill = false;
}

////////////

L2_DOOR1.targetDoor = L1_DOOR5;

L2_PORTAL1.kill = true;
if (L2_LO1.solved)
{
L2_PORTAL1.kill = false;
}

L2_DOOR2.targetDoor = L3_DOOR1;

////////////

L3_DOOR1.targetDoor = L2_DOOR2;
L3_DOOR2.targetDoor = L3_DOOR3;
L3_DOOR3.targetDoor = L3_DOOR2;
L3_DOOR4.targetDoor = L3_DOOR5;
L3_DOOR5.targetDoor = L3_DOOR4;

L3_PORTAL1.kill = true;
if (L3_SW1.switchStatus)
{
L3_PORTAL1.kill = false;
}

/////////////

linkDoors(L4_DOOR_X1, L4_DOOR_Y2);
linkDoors(L4_DOOR_X2, L4_DOOR_Y1);
linkDoors(L4_DOOR_X3, L4_DOOR_Y3);
linkDoors(L4_DOOR_X4, L4_DOOR_Y4);
linkDoors(L4_DOOR_X5, L4_DOOR_Y5);
linkDoors(L4_DOOR_X6, L4_DOOR_X9);
linkDoors(L4_DOOR_X7, L4_DOOR_Y7);
linkDoors(L4_DOOR_X8, L4_DOOR_Y6);


_glitch_time_left = 9999999;

// if (_fhdk_done)
// {
// DOOR11.targetDoor = DOOR2;
// }

// if (LO1.solved)
// {
// PORTAL2.kill = false;
// }

// DEBUG BEGIN
} catch (err) { alert(err); }
// DEBUG END
}
