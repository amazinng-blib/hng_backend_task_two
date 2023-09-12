const mongoose = require('mongoose');

const taskTwoSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const TaskTwoModel = mongoose.model('TaskTwoModel', taskTwoSchema);
module.exports = TaskTwoModel;

// const dynamicFieldSchema = new mongoose.Schema(
//   {
//     // Allow any field name with any value
//     dynamicFields: {
//       type: Map,
//       of: mongoose.Schema.Types.Mixed,
//     },
//   },
//   { timestamps: true }
// );

// const DynamicFieldModel = mongoose.model('DynamicField', dynamicFieldSchema);

// module.exports = DynamicFieldModel;
