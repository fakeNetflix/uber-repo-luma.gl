'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DRAWING_BUFFERS = undefined;
exports.default = initializeDrawBuffers;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DRAWING_BUFFERS = exports.DRAWING_BUFFERS = [
// The fragment shader is not written to any color buffer.
'NONE',
// Fragment shader is written to the back color buffer.
'BACK',
// Fragment shader is written to the nth color attachment of the framebuffer.
'COLOR_ATTACHMENT0', 'COLOR_ATTACHMENT1', 'COLOR_ATTACHMENT2', 'COLOR_ATTACHMENT3', 'COLOR_ATTACHMENT4', 'COLOR_ATTACHMENT5', 'COLOR_ATTACHMENT6', 'COLOR_ATTACHMENT7', 'COLOR_ATTACHMENT8', 'COLOR_ATTACHMENT9', 'COLOR_ATTACHMENT10', 'COLOR_ATTACHMENT11', 'COLOR_ATTACHMENT12', 'COLOR_ATTACHMENT13', 'COLOR_ATTACHMENT14', 'COLOR_ATTACHMENT15'];

// Map bufferName string or enum to correct enum (extension version)
// WebGL2 polyfill of drawBuffers using the 'WEBGL_draw_buffers' extension.
// Note: The tricky part is copying the extension constants onto the gl context

/* global WebGLRenderingContext, WebGL2RenderingContext */
function getExtConstant(ext, constant) {
  if (constant.indexOf('COLOR_ATTACHMENT') === 0) {
    constant = constant + '_WEBGL';
  }
  return ext[constant];
}

/**
 * @param {WebGLRenderingContext} gl - gl context
 * @param {GLenum/String[]} buffers - array of enums
 */
function drawBuffers(gl, buffers) {
  var ext = gl.getExtension('WEBGL_draw_buffers');
  (0, _assert2.default)(ext, 'WEBGL_draw_buffers');
  ext.drawBuffersWEBGL(buffers);
}

// Only add if WebGL2RenderingContext is not available
if (!WebGL2RenderingContext) {

  var prototype = WebGLRenderingContext.prototype;

  prototype.drawBuffers = prototype.drawBuffers || drawBuffers;
}

function initializeDrawBuffers(gl) {
  var ext = gl.getExtension('WEBGL_draw_buffers');
  (0, _assert2.default)(ext, 'WEBGL_draw_buffers');
  for (var constant in DRAWING_BUFFERS) {
    gl[constant] = gl[constant] || getExtConstant(ext, constant);
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93ZWJnbDIvcG9seWZpbGwvZHJhdy1idWZmZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkF5RHdCLHFCOztBQXJEeEI7Ozs7OztBQUVPLElBQU0sNENBQWtCO0FBQzdCO0FBQ0EsTUFGNkI7QUFHN0I7QUFDQSxNQUo2QjtBQUs3QjtBQUNBLG1CQU42QixFQU83QixtQkFQNkIsRUFRN0IsbUJBUjZCLEVBUzdCLG1CQVQ2QixFQVU3QixtQkFWNkIsRUFXN0IsbUJBWDZCLEVBWTdCLG1CQVo2QixFQWE3QixtQkFiNkIsRUFjN0IsbUJBZDZCLEVBZTdCLG1CQWY2QixFQWdCN0Isb0JBaEI2QixFQWlCN0Isb0JBakI2QixFQWtCN0Isb0JBbEI2QixFQW1CN0Isb0JBbkI2QixFQW9CN0Isb0JBcEI2QixFQXFCN0Isb0JBckI2QixDQUF4Qjs7QUF3QlA7QUE5QkE7QUFDQTs7QUFFQTtBQTRCQSxTQUFTLGNBQVQsQ0FBd0IsR0FBeEIsRUFBNkIsUUFBN0IsRUFBdUM7QUFDckMsTUFBSSxTQUFTLE9BQVQsQ0FBaUIsa0JBQWpCLE1BQXlDLENBQTdDLEVBQWdEO0FBQzlDLGVBQWMsUUFBZDtBQUNEO0FBQ0QsU0FBTyxJQUFJLFFBQUosQ0FBUDtBQUNEOztBQUVEOzs7O0FBSUEsU0FBUyxXQUFULENBQXFCLEVBQXJCLEVBQXlCLE9BQXpCLEVBQWtDO0FBQ2hDLE1BQU0sTUFBTSxHQUFHLFlBQUgsQ0FBZ0Isb0JBQWhCLENBQVo7QUFDQSx3QkFBTyxHQUFQLEVBQVksb0JBQVo7QUFDQSxNQUFJLGdCQUFKLENBQXFCLE9BQXJCO0FBQ0Q7O0FBRUQ7QUFDQSxJQUFJLENBQUMsc0JBQUwsRUFBNkI7O0FBRTNCLE1BQU0sWUFBWSxzQkFBc0IsU0FBeEM7O0FBRUEsWUFBVSxXQUFWLEdBQXdCLFVBQVUsV0FBVixJQUF5QixXQUFqRDtBQUVEOztBQUVjLFNBQVMscUJBQVQsQ0FBK0IsRUFBL0IsRUFBbUM7QUFDaEQsTUFBTSxNQUFNLEdBQUcsWUFBSCxDQUFnQixvQkFBaEIsQ0FBWjtBQUNBLHdCQUFPLEdBQVAsRUFBWSxvQkFBWjtBQUNBLE9BQUssSUFBTSxRQUFYLElBQXVCLGVBQXZCLEVBQXdDO0FBQ3RDLE9BQUcsUUFBSCxJQUFlLEdBQUcsUUFBSCxLQUFnQixlQUFlLEdBQWYsRUFBb0IsUUFBcEIsQ0FBL0I7QUFDRDtBQUNGIiwiZmlsZSI6ImRyYXctYnVmZmVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdlYkdMMiBwb2x5ZmlsbCBvZiBkcmF3QnVmZmVycyB1c2luZyB0aGUgJ1dFQkdMX2RyYXdfYnVmZmVycycgZXh0ZW5zaW9uLlxuLy8gTm90ZTogVGhlIHRyaWNreSBwYXJ0IGlzIGNvcHlpbmcgdGhlIGV4dGVuc2lvbiBjb25zdGFudHMgb250byB0aGUgZ2wgY29udGV4dFxuXG4vKiBnbG9iYWwgV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ICovXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5cbmV4cG9ydCBjb25zdCBEUkFXSU5HX0JVRkZFUlMgPSBbXG4gIC8vIFRoZSBmcmFnbWVudCBzaGFkZXIgaXMgbm90IHdyaXR0ZW4gdG8gYW55IGNvbG9yIGJ1ZmZlci5cbiAgJ05PTkUnLFxuICAvLyBGcmFnbWVudCBzaGFkZXIgaXMgd3JpdHRlbiB0byB0aGUgYmFjayBjb2xvciBidWZmZXIuXG4gICdCQUNLJyxcbiAgLy8gRnJhZ21lbnQgc2hhZGVyIGlzIHdyaXR0ZW4gdG8gdGhlIG50aCBjb2xvciBhdHRhY2htZW50IG9mIHRoZSBmcmFtZWJ1ZmZlci5cbiAgJ0NPTE9SX0FUVEFDSE1FTlQwJyxcbiAgJ0NPTE9SX0FUVEFDSE1FTlQxJyxcbiAgJ0NPTE9SX0FUVEFDSE1FTlQyJyxcbiAgJ0NPTE9SX0FUVEFDSE1FTlQzJyxcbiAgJ0NPTE9SX0FUVEFDSE1FTlQ0JyxcbiAgJ0NPTE9SX0FUVEFDSE1FTlQ1JyxcbiAgJ0NPTE9SX0FUVEFDSE1FTlQ2JyxcbiAgJ0NPTE9SX0FUVEFDSE1FTlQ3JyxcbiAgJ0NPTE9SX0FUVEFDSE1FTlQ4JyxcbiAgJ0NPTE9SX0FUVEFDSE1FTlQ5JyxcbiAgJ0NPTE9SX0FUVEFDSE1FTlQxMCcsXG4gICdDT0xPUl9BVFRBQ0hNRU5UMTEnLFxuICAnQ09MT1JfQVRUQUNITUVOVDEyJyxcbiAgJ0NPTE9SX0FUVEFDSE1FTlQxMycsXG4gICdDT0xPUl9BVFRBQ0hNRU5UMTQnLFxuICAnQ09MT1JfQVRUQUNITUVOVDE1J1xuXTtcblxuLy8gTWFwIGJ1ZmZlck5hbWUgc3RyaW5nIG9yIGVudW0gdG8gY29ycmVjdCBlbnVtIChleHRlbnNpb24gdmVyc2lvbilcbmZ1bmN0aW9uIGdldEV4dENvbnN0YW50KGV4dCwgY29uc3RhbnQpIHtcbiAgaWYgKGNvbnN0YW50LmluZGV4T2YoJ0NPTE9SX0FUVEFDSE1FTlQnKSA9PT0gMCkge1xuICAgIGNvbnN0YW50ID0gYCR7Y29uc3RhbnR9X1dFQkdMYDtcbiAgfVxuICByZXR1cm4gZXh0W2NvbnN0YW50XTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgLSBnbCBjb250ZXh0XG4gKiBAcGFyYW0ge0dMZW51bS9TdHJpbmdbXX0gYnVmZmVycyAtIGFycmF5IG9mIGVudW1zXG4gKi9cbmZ1bmN0aW9uIGRyYXdCdWZmZXJzKGdsLCBidWZmZXJzKSB7XG4gIGNvbnN0IGV4dCA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfZHJhd19idWZmZXJzJyk7XG4gIGFzc2VydChleHQsICdXRUJHTF9kcmF3X2J1ZmZlcnMnKTtcbiAgZXh0LmRyYXdCdWZmZXJzV0VCR0woYnVmZmVycyk7XG59XG5cbi8vIE9ubHkgYWRkIGlmIFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgaXMgbm90IGF2YWlsYWJsZVxuaWYgKCFXZWJHTDJSZW5kZXJpbmdDb250ZXh0KSB7XG5cbiAgY29uc3QgcHJvdG90eXBlID0gV2ViR0xSZW5kZXJpbmdDb250ZXh0LnByb3RvdHlwZTtcblxuICBwcm90b3R5cGUuZHJhd0J1ZmZlcnMgPSBwcm90b3R5cGUuZHJhd0J1ZmZlcnMgfHwgZHJhd0J1ZmZlcnM7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZURyYXdCdWZmZXJzKGdsKSB7XG4gIGNvbnN0IGV4dCA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfZHJhd19idWZmZXJzJyk7XG4gIGFzc2VydChleHQsICdXRUJHTF9kcmF3X2J1ZmZlcnMnKTtcbiAgZm9yIChjb25zdCBjb25zdGFudCBpbiBEUkFXSU5HX0JVRkZFUlMpIHtcbiAgICBnbFtjb25zdGFudF0gPSBnbFtjb25zdGFudF0gfHwgZ2V0RXh0Q29uc3RhbnQoZXh0LCBjb25zdGFudCk7XG4gIH1cbn1cblxuIl19