const { eventContactEmail } = require("../template/contactFormRes");
const mailSender = require("../utils/mailSenderr");

const contactCtrl = async (req, res) => {
    const { name, email, contact, message } = req.body;

    try {
        const emailRes = await mailSender(
            "vikasmaheshwari6267@gmail.com",

            "Your Data send successfully",
            eventContactEmail(name, email, contact, message)
        )
        if (!email || !name || !contact || !message) {
            return res.status(500).send({
                message: "Plase provide all fields",
                success: false
            })
        }
        res.status(200).send({
            message: "Email send successfully.Our team will contact you soon!",
            emailRes,
            success: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Error in sending email",
        })
    }
}

module.exports = { contactCtrl }