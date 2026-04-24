const Member = require("../models/Member");

const getImageUrl = (req, filename) => {
  if (!filename) {
    return "";
  }
  return `${req.protocol}://${req.get("host")}/uploads/${filename}`;
};

const toHobbiesArray = (additionalDetails = "") => {
  if (!additionalDetails || typeof additionalDetails !== "string") {
    return [];
  }

  return additionalDetails
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

const normalizeMemberResponse = (req, memberDoc) => {
  const member = memberDoc.toObject();
  const imageUrl = getImageUrl(req, member.image);

  return {
    ...member,
    imageUrl,
    phone: member.contact,
    hobbies: toHobbiesArray(member.additionalDetails),
    avatar: imageUrl,
  };
};

exports.createMember = async (req, res) => {
  try {
    const { name, role, email, contact, additionalDetails } = req.body;

    if (!name || !role || !email || !contact) {
      return res.status(400).json({
        success: false,
        message: "Name, role, email, and contact are required.",
      });
    }

    const member = await Member.create({
      name,
      role,
      email,
      contact,
      additionalDetails,
      image: req.file ? req.file.filename : "",
    });

    return res.status(201).json({
      success: true,
      message: "Member created successfully.",
      data: normalizeMemberResponse(req, member),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create member.",
      error: error.message,
    });
  }
};

exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });

    const normalized = members.map((member) => normalizeMemberResponse(req, member));

    return res.status(200).json({
      success: true,
      data: normalized,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch members.",
      error: error.message,
    });
  }
};

exports.getMemberById = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await Member.findById(id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: normalizeMemberResponse(req, member),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch member.",
      error: error.message,
    });
  }
};
