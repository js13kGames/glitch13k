// DEBUG BEGIN
try {
// DEBUG END
var MAP_WIDTH = 126;
var MAP_HEIGHT = 58;
var MAP_DATA = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003130000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003130000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033313333003130300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031611113000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031611113000000333333333333333333333333333333333000000000000000000000000000000000000000000000000000000000000000030000000000000031615113333330311311131113111111111111111111113000000000000000000000000000000000000000000000000000000000000000030000000000000031611111161130331313131313111111111111111111113000000000000000000000000000000000000000000000000000000000000000030000003330330031611111161130331113111311111111111111111111111000000000000000000000000000000000000000000000000000000000000000030000033333300031333333133330333333333333333333333333333333333000000000000000000000000000000000000000000000000000000000000000030000000033000000000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000030000000333000000000000000000300000000000000000000000000000000000000000000000000000000000000033333033333000033333333333333333333333333300000000000000000000300000000000000000000000000000000333333333333333333333333333333333333330000333330000000000000000000000333000000000000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000333333000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
var PLAYER;
var CUBE1;
var CUBE2;
var DOOR1;
var DOOR2;
var DOOR3;
var DOOR4;
var DOOR5;
var DOOR6;
var CRYSTAL1;
var PORTAL1;
var SW1;
var SW2;
var POT1;
var POT2;
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
		new ObjPlayer(6, 7),
		new ObjCube(5, 6, 0),
		new ObjCube(6, 8, 2),
		new ObjDoor(4, 5, 0),
		new ObjDoor(9, 11, 0),
		new ObjDoor(12, 3, 0),
		new ObjDoor(12, 5, 0),
		new ObjDoor(2, 11, 0),
		new ObjDoor(16, 8, 1),
		new ObjCrystal(12, 9),
		new ObjPortal(7, 9, 4, 0),
		new ObjSwitch(6, 6, 0),
		new ObjSwitch2(2, 6),
		new ObjPotion(2, 9, 0),
		new ObjPotion(5, 7, 1)
		);
	PLAYER = _objs[0];
	CUBE1 = _objs[1];
	CUBE2 = _objs[2];
	DOOR1 = _objs[3];
	DOOR2 = _objs[4];
	DOOR3 = _objs[5];
	DOOR4 = _objs[6];
	DOOR5 = _objs[7];
	DOOR6 = _objs[8];
	CRYSTAL1 = _objs[9];
	PORTAL1 = _objs[10];
	SW1 = _objs[11];
	SW2 = _objs[12];
	POT1 = _objs[13];
	POT2 = _objs[14];


// DEBUG BEGIN
} catch (err) { alert(err); }
// DEBUG END
}

function mapUpdate()
{
// DEBUG BEGIN
try {
// DEBUG END
_glitch_time_left = 9999999;

DOOR1.targetDoor = DOOR4;
DOOR2.targetDoor = DOOR3;
DOOR3.targetDoor = DOOR2;
DOOR4.targetDoor = DOOR1;
DOOR5.targetDoor = DOOR5;
DOOR6.targetDoor = DOOR6;

PORTAL1.kill = true;

if (SW1.switchStatus == true)
{
	DOOR1.targetDoor = DOOR5;
	DOOR5.targetDoor = DOOR1;
}

if (SW2.switchStatus == true)
{
	PORTAL1.kill = false;
}
// DEBUG BEGIN
} catch (err) { alert(err); }
// DEBUG END
}
