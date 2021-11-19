(()=>{"use strict";var __webpack_modules__={519:function(__unused_webpack_module,exports,__webpack_require__){eval('\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(860));\nconst dashboard_1 = __webpack_require__(560);\nconst cors_1 = __importDefault(__webpack_require__(582));\nconst app = (0, express_1.default)();\nconst allowedOrigins = (/* unused pure expression or super */ null && (["http://127.0.0.1:5500"]));\napp.use((0, cors_1.default)());\n//Accept json data in bodies\napp.use(express_1.default.json({ limit: \'50mb\' }));\napp.use("/dashboard", dashboard_1.dashboardRouter);\napp.listen(3001);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTE5LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNERBQThCO0FBRTlCLDZDQUFxRDtBQUNyRCx5REFBd0I7QUFDeEIsTUFBTSxHQUFHLEdBQUcscUJBQU8sR0FBRSxDQUFDO0FBRXRCLE1BQU0sY0FBYyxHQUFHLGlEQUFDLHVCQUF1QixDQUFDLEdBQUM7QUFFakQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBSSxHQUFFLENBQUMsQ0FBQztBQUNoQiw0QkFBNEI7QUFDNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFFdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsMkJBQWUsQ0FBQyxDQUFDO0FBRXZDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLy4vc3JjL21haW4udHM/Y2Q0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBkYXNoYm9hcmRSb3V0ZXIgfSBmcm9tIFwiLi9yb3V0ZXMvZGFzaGJvYXJkXCI7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5jb25zdCBhbGxvd2VkT3JpZ2lucyA9IFtcImh0dHA6Ly8xMjcuMC4wLjE6NTUwMFwiXTtcblxuYXBwLnVzZShjb3JzKCkpO1xuLy9BY2NlcHQganNvbiBkYXRhIGluIGJvZGllc1xuYXBwLnVzZShleHByZXNzLmpzb24oe2xpbWl0OiAnNTBtYid9KSk7XG5cbmFwcC51c2UoXCIvZGFzaGJvYXJkXCIsIGRhc2hib2FyZFJvdXRlcik7XG5cbmFwcC5saXN0ZW4oMzAwMSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///519\n')},560:(__unused_webpack_module,exports,__webpack_require__)=>{eval('\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.dashboardRouter = void 0;\nconst express_1 = __webpack_require__(860);\nexports.dashboardRouter = (0, express_1.Router)();\nconst storage_1 = __webpack_require__(912);\nexports.dashboardRouter.get("/events", (req, res, next) => {\n    res.send(storage_1.storage.data.events);\n});\nexports.dashboardRouter.post("/:event/upload", (req, res, next) => {\n    const eventId = req.params.event;\n    //Log json data\n    let { event, image, user, title, time } = req.body;\n    res.send({ message: "ok", eventId: eventId });\n    storage_1.storage.saveImage(event, image, title, user, time);\n});\nexports.dashboardRouter.post("/:event/create", (req, res, next) => {\n    const eventName = req.params.event;\n    //Log json data\n    let { event, image, user, title, time } = req.body;\n    storage_1.storage.createEvent({\n        ended: false,\n        id: generateId(),\n        name: eventName,\n        photos: [],\n        users: [],\n    });\n    res.send({ message: "ok", eventName: eventName });\n});\n//Function to generate id\nfunction generateId() {\n    return Math.random().toString(36).substr(2, 9);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTYwLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFpQztBQUNwQix1QkFBZSxHQUFHLG9CQUFNLEdBQUUsQ0FBQztBQUN4QywyQ0FBcUM7QUFFckMsdUJBQWUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNoRCxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsdUJBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ3hELE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pDLGVBQWU7SUFDZixJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDbkQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDOUMsaUJBQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FBQyxDQUFDO0FBRUgsdUJBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ3hELE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ25DLGVBQWU7SUFDZixJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDbkQsaUJBQU8sQ0FBQyxXQUFXLENBQUM7UUFDbEIsS0FBSyxFQUFFLEtBQUs7UUFDWixFQUFFLEVBQUUsVUFBVSxFQUFFO1FBQ2hCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUUsRUFBRTtLQUNWLENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyxDQUFDO0FBRUgseUJBQXlCO0FBQ3pCLFNBQVMsVUFBVTtJQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC8uL3NyYy9yb3V0ZXMvZGFzaGJvYXJkLnRzP2NhNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmV4cG9ydCBjb25zdCBkYXNoYm9hcmRSb3V0ZXIgPSBSb3V0ZXIoKTtcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tIFwiLi4vc3RvcmFnZVwiO1xuXG5kYXNoYm9hcmRSb3V0ZXIuZ2V0KFwiL2V2ZW50c1wiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgcmVzLnNlbmQoc3RvcmFnZS5kYXRhLmV2ZW50cyk7XG59KTtcblxuZGFzaGJvYXJkUm91dGVyLnBvc3QoXCIvOmV2ZW50L3VwbG9hZFwiLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgZXZlbnRJZCA9IHJlcS5wYXJhbXMuZXZlbnQ7XG4gIC8vTG9nIGpzb24gZGF0YVxuICBsZXQgeyBldmVudCwgaW1hZ2UsIHVzZXIsIHRpdGxlLCB0aW1lIH0gPSByZXEuYm9keTtcbiAgcmVzLnNlbmQoeyBtZXNzYWdlOiBcIm9rXCIsIGV2ZW50SWQ6IGV2ZW50SWQgfSk7XG4gIHN0b3JhZ2Uuc2F2ZUltYWdlKGV2ZW50LCBpbWFnZSwgdGl0bGUsIHVzZXIsIHRpbWUpO1xufSk7XG5cbmRhc2hib2FyZFJvdXRlci5wb3N0KFwiLzpldmVudC9jcmVhdGVcIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IGV2ZW50TmFtZSA9IHJlcS5wYXJhbXMuZXZlbnQ7XG4gIC8vTG9nIGpzb24gZGF0YVxuICBsZXQgeyBldmVudCwgaW1hZ2UsIHVzZXIsIHRpdGxlLCB0aW1lIH0gPSByZXEuYm9keTtcbiAgc3RvcmFnZS5jcmVhdGVFdmVudCh7XG4gICAgZW5kZWQ6IGZhbHNlLFxuICAgIGlkOiBnZW5lcmF0ZUlkKCksXG4gICAgbmFtZTogZXZlbnROYW1lLFxuICAgIHBob3RvczogW10sXG4gICAgdXNlcnM6IFtdLFxuICB9KTtcbiAgcmVzLnNlbmQoeyBtZXNzYWdlOiBcIm9rXCIsIGV2ZW50TmFtZTogZXZlbnROYW1lIH0pO1xufSk7XG5cbi8vRnVuY3Rpb24gdG8gZ2VuZXJhdGUgaWRcbmZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///560\n')},912:(__unused_webpack_module,exports)=>{eval('\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.storage = exports.Storage = void 0;\nclass Storage {\n    constructor() {\n        this.data = {\n            events: [],\n        };\n        console.log("Storage: ctor()");\n    }\n    createEvent(event) {\n        this.data.events.push(event);\n        console.log("Storage: createEvent()");\n        //Log number of events\n        console.log(this.data.events.length);\n    }\n    saveImage(event, data, title, uploader, time) {\n        let eIndex = this.data.events.findIndex((e) => e.id === event);\n        this.data.events[eIndex].photos.push({\n            data,\n            fileName: title,\n            uploadedBy: uploader,\n            time\n        });\n    }\n}\nexports.Storage = Storage;\nexports.storage = new Storage();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTEyLmpzIiwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsT0FBTztJQUtsQjtRQUpPLFNBQUksR0FBYTtZQUN0QixNQUFNLEVBQUUsRUFBRTtTQUNYLENBQUM7UUFHQSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsc0JBQXNCO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsSUFBSTtRQUN6QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNuQyxJQUFJO1lBQ0osUUFBUSxFQUFFLEtBQUs7WUFDZixVQUFVLEVBQUUsUUFBUTtZQUNwQixJQUFJO1NBQ0wsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBekJELDBCQXlCQztBQUtZLGVBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC8uL3NyYy9zdG9yYWdlLnRzPzQwNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUV2ZW50IH0gZnJvbSBcIi4vdHlwZXMvdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2Uge1xuICBwdWJsaWMgZGF0YTogSVN0b3JhZ2UgPSB7XG4gICAgZXZlbnRzOiBbXSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIlN0b3JhZ2U6IGN0b3IoKVwiKTtcbiAgfVxuXG4gIGNyZWF0ZUV2ZW50KGV2ZW50OiBJRXZlbnQpIHtcbiAgICB0aGlzLmRhdGEuZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgIGNvbnNvbGUubG9nKFwiU3RvcmFnZTogY3JlYXRlRXZlbnQoKVwiKTtcbiAgICAvL0xvZyBudW1iZXIgb2YgZXZlbnRzXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhLmV2ZW50cy5sZW5ndGgpO1xuICB9XG5cbiAgc2F2ZUltYWdlKGV2ZW50LCBkYXRhLCB0aXRsZSwgdXBsb2FkZXIsdGltZSkge1xuICAgIGxldCBlSW5kZXggPSB0aGlzLmRhdGEuZXZlbnRzLmZpbmRJbmRleCgoZSkgPT4gZS5pZCA9PT0gZXZlbnQpO1xuICAgIHRoaXMuZGF0YS5ldmVudHNbZUluZGV4XS5waG90b3MucHVzaCh7XG4gICAgICBkYXRhLFxuICAgICAgZmlsZU5hbWU6IHRpdGxlLFxuICAgICAgdXBsb2FkZWRCeTogdXBsb2FkZXIsXG4gICAgICB0aW1lXG4gICAgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIElTdG9yYWdlIHtcbiAgZXZlbnRzOiBJRXZlbnRbXTtcbn1cbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///912\n')},582:Q=>{Q.exports=require("cors")},860:Q=>{Q.exports=require("express")}},__webpack_module_cache__={};function __webpack_require__(Q){var U=__webpack_module_cache__[Q];if(void 0!==U)return U.exports;var F=__webpack_module_cache__[Q]={exports:{}};return __webpack_modules__[Q].call(F.exports,F,F.exports,__webpack_require__),F.exports}var __webpack_exports__=__webpack_require__(519)})();