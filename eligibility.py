def check_eligibility(user, schemes):
    eligible = []

    for scheme in schemes:
        if user["age"] < scheme["minAge"]:
            continue
        if user["age"] > scheme["maxAge"]:
            continue
        if scheme["category"] != user["category"]:
            continue
        if scheme["education"] != user["education"]:
            continue
        if user["income"] > scheme["incomeLimit"]:
            continue

        eligible.append(scheme["name"])

    return eligible
