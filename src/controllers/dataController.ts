import DataModel from "../models/data.model";

export const getData = async (req: any, res: any) => {
  try {
    const { contentType } = req.params;

    if (contentType) {
      const response = await DataModel.findOne({
        content_type: Number(contentType),
      });
      res.status(200).json(response);
    }
  } catch (err: any) {
    console.error(err?.message);
    throw new Error(err?.message);
  }
};

export const addData = async (req: any, res: any): Promise<any> => {
  try {
    const { contentType } = req.params;
    const { text } = req.body;

    if (contentType && text) {
      let addCount: number = 1;

      const data = await DataModel.findOne({ content_type: contentType });

      if (data) {
        addCount = Number(data.add_count) + 1;

        await DataModel.deleteOne({ _id: data._id });
      }

      await DataModel.create({
        text: text,
        content_type: contentType,
        add_count: addCount,
      });

      res.status(200).json({ message: "Data added successfully" });
    }
  } catch (err: any) {
    console.error(err?.message);
    throw new Error(err?.message);
  }
};

export const updateData = async (req: any, res: any): Promise<any> => {
  try {
    const { contentType } = req.params;
    const { text } = req.body;

    if (contentType && text) {
      let updateCount: number = 1;

      const data = await DataModel.findOne({ content_type: contentType });

      if (data) {
        updateCount = Number(data.update_count) + 1;

        await DataModel.updateOne(
          { _id: data._id },
          {
            text: text,
            content_type: contentType,
            update_count: updateCount,
          }
        );

        res.status(200).json({ message: "Data updated successfully" });
      } else {
        res.status(404).json({ message: "Data not found!" });
      }
    }
  } catch (err: any) {
    console.error(err?.message);
    throw new Error(err?.message);
  }
};

export const getAPICount = async (req: any, res: any): Promise<any> => {
  try {
    const { contentType } = req.params;

    if (contentType) {
      const response = await DataModel.find({ content_type: contentType });

      res.status(200).json(response);
    }
  } catch (err: any) {
    console.error(err?.message);
    throw new Error(err?.message);
  }
};
