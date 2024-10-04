package web

type FormErrors map[string]string

type ContactModelForm struct {
	Name    string
	Email   string
	Tel     string
	Message string

	Errors FormErrors
}

func (f *ContactModelForm) Validate() bool {
	f.Errors = FormErrors{}

	if f.Name == "" {
		f.Errors["Name"] = "Bitte geben Sie Ihren Namen an."
	}

	if f.Email == "" {
		f.Errors["Email"] = "Bitte geben Sie Ihre Email an."
	}

	if f.Email == "" {
		f.Errors["Tel"] = "Bitte geben Sie Ihre Telefonnummer an."
	}

	if len(f.Message) >= 1000 || f.Message == "" {
		f.Errors["Bio"] = "Nachricht länge bitte zwischen 1 - 1000 Zeichen."
	}

	return len(f.Errors) == 0
}
