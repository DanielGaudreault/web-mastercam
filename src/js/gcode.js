// Simple DXF parser (mock implementation)
export function parseDXF(dxfText) {
  console.log("Parsing DXF:", dxfText.slice(0, 100) + "...");
  // Mock: Return sample paths (replace with real DXF parsing)
  return [
    {
      type: "LINE",
      points: [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(1, 1, 0)
      ]
    }
  ];
}

// G-code generator (simplified)
export function generateGCode(paths) {
  let gcode = "; Generated by Web-Mastercam\nG21 ; mm mode\nG90 ; absolute positioning\n";
  paths.forEach(path => {
    gcode += `G0 X${path.points[0].x} Y${path.points[0].y}\n`;
    gcode += `G1 X${path.points[1].x} Y${path.points[1].y} F500\n`;
  });
  return gcode;
}
